import React, {useEffect, useState} from 'react';
import {
    Button,
    unstable_Form as Form,
    unstable_FormInput as FormInput,
    unstable_FormLabel as FormLabel,
    unstable_FormMessage as FormMessage,
    unstable_FormRadio as FormRadio,
    unstable_FormRadioGroup as FormRadioGroup,
    unstable_FormSubmitButton as FormSubmitButton,
    unstable_useFormState as useFormState
} from "reakit";
import {Checkbox} from "reakit/Checkbox";
import moment from 'moment';
import withValidation from "../with-validation";
import {expirationDateFormSchema} from "../validation-schemes";
import {defaultBrowserLocation, getLocation} from "../../../helpers/geolocation";
import Autocomplete from "react-google-autocomplete";
import Select from 'react-select';
import {map} from 'lodash';
import Loader from '../../spinner'
import {toBase64} from "../../../helpers/base64";

const PostAddForm = (props) => {
    const [formStep, setFormStep] = useState(1);
    const [formData, updateFormData] = useState({});
    const [selectedOption, selectOption] = useState('');
    const [browserLocation, setBrowserLocation] = useState(defaultBrowserLocation);
    const [tags, setTags] = useState([]);
    const [checkedItems, setCheckedItems] = useState({});
    const [categories, setCategories] = useState([]);
    const [address, setAddress] = useState({
        city: 'wroclaw',
        lat: 51.107883,
        lng: 17.038538
    });
    const [image, setImage] = useState(null);

    const parseAddres = (address) => {
        const {address_components, geometry: {location: {lat, lng}}} = address;

        const ShouldBeComponent = {
            home: ["street_number"],
            postal_code: ["postal_code"],
            street: ["street_address", "route"],
            region: [
                "administrative_area_level_1",
                "administrative_area_level_2",
                "administrative_area_level_3",
                "administrative_area_level_4",
                "administrative_area_level_5"
            ],
            city: [
                "locality",
                "sublocality",
                "sublocality_level_1",
                "sublocality_level_2",
                "sublocality_level_3",
                "sublocality_level_4"
            ],
            country: ["country"]
        };

        const resultObject = {
            home: "",
            postal_code: "",
            street: "",
            region: "",
            city: "",
            country: "",
            lat: lat(),
            lng: lng()
        };

        address_components.forEach(component => {
            for (var shouldBe in ShouldBeComponent) {
                if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
                    if (shouldBe === "country") {
                        resultObject[shouldBe] = component.short_name;
                    } else {
                        resultObject[shouldBe] = component.long_name;
                    }
                }
            }
        });
        setAddress(resultObject);
    };

    async function saveFile(file){
        setImage(await toBase64(file));
    }
    async function fetchTags() {
        const res = await fetch(`${window.urlApi}tags?api_token=asdf`);
        res.json()
            .then(res => setTags(res))
    }

    const sendData = async () => {

        const body = {
            address: address,
            title: 'title',
            description: formData.description,
            end_at: formData.expirationDate,
            name: formData.name,
            phone_number: formData.telephone,
            email: formData.email,
            category_id: 1,
            tags: formData.tags,
            photo: image
        };


        await fetch(`${window.urlApi}posts?api_token=asdf`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(response => response.json())
            .then(data => {
                console.log(data);
            }).catch(e => console.log(e, 'error'));


    };

    async function fetchCategories() {
        const res = await fetch(`${window.urlApi}categories?api_token=asdf`);
        res.json()
            .then(res => setCategories(res))
    }

    useEffect(() => {
        fetchTags();
        fetchCategories();
    }, []);

    const insertFormData = (data) => {
        console.log({...formData, ...data});
        updateFormData({...formData, ...data});
    };

    const expirationDateForm = useFormState({
        values: {expirationDate: ""},
        resetOnSubmitSucceed: true,
        resetOnUnmount: true,
        validateOnBlur: false,
        validateOnChange: false,
        onValidate: props.validate(expirationDateFormSchema),
        onSubmit: (data) => {
            insertFormData(data);
            nextStep()
        }
    });


    const personProfileForm = useFormState({
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: () => {
            insertFormData({tags: Object.values(checkedItems)});
            nextStep()
        }
    });

    const addressForm = useFormState({
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (data) => {
            insertFormData({...data,});
            nextStep()
        }
    });

    const contactForm = useFormState({
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (data) => {
            insertFormData(data);
            sendData();
        }
    });

    const handleChange = (event) => {
        setCheckedItems({...checkedItems, [event.target.name]: parseInt(event.target.value)});
    };

    const nextStep = () => setFormStep(formStep + 1);
    const prevStep = () => setFormStep(formStep - 1);
    const setDropDownOption = (option) => selectOption(option);

    return (
        <div className='d-flex flex-column'>
            <div className='d-flex justify-content-around  border-bottom'>
                <div> Form step: {formStep}</div>
            </div>
            <div className='p-2'> Nowe ogłoszenie:</div>
            <Form {...expirationDateForm} className={formStep !== 1 ? 'd-none' : ''}>
                <FormRadioGroup {...expirationDateForm} name="expirationDate" id="expirationDate">
                    <FormLabel {...expirationDateForm} as="legend" name="expirationDate">Wybierz termin wygaśnięcia
                        ogłoszenia</FormLabel>
                    <label><FormRadio {...expirationDateForm} name="expirationDate"
                                      value={`${moment().add(3, 'days').format()}`}/> Po 3 dniach
                    </label>
                    <label><FormRadio {...expirationDateForm} name="expirationDate"
                                      value={`${moment().add(5, 'days').format()}`}/> Po 5 dniach
                    </label>
                    <label><FormRadio {...expirationDateForm} name="expirationDate"
                                      value={`${moment().add(1, 'week').format()}`}/> Po tygodniu </label>
                    <label><FormRadio {...expirationDateForm} name="expirationDate"
                                      value={`${moment().add(1, 'month').format()}`}/> Po miesiacu </label>
                </FormRadioGroup>

                {expirationDateForm.errors.expirationDate &&
                <div className='text-danger'>ikonka {expirationDateForm.errors.expirationDate}</div>}
                <FormMessage {...expirationDateForm} name="selectPostType"/>
                <FormSubmitButton {...expirationDateForm}>Dalej</FormSubmitButton>
            </Form>

            <Form {...personProfileForm} className={formStep !== 2 ? 'd-none' : ''}>>
                <FormLabel {...personProfileForm} name="description">
                    Określ profil osoby, która potrzebuje pomocy :
                </FormLabel>

                {tags.length === 0 ? <Loader/> : map(tags, tag => {
                    return <label key={tag.id}>
                        <Checkbox value={tag.id} name={tag.name} checked={checkedItems[tag.name]}
                                  onChange={handleChange}/>
                        {tag.name}
                    </label>
                })}

                <FormMessage {...personProfileForm} name="description"/>
                <FormSubmitButton {...personProfileForm}>dalej</FormSubmitButton>
            </Form>

            <Form {...addressForm} className={formStep !== 3 ? 'd-none' : ''}>>
                <FormLabel {...addressForm} name="message">
                    Dodaj treś ogłoszenia
                </FormLabel>
                <FormInput
                    {...addressForm}
                    name="message"
                    as="textarea"
                />

                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile" onChange={(e) => saveFile(e.target.files[0])}/>
                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                </div>

                <Select
                    name="form-field-name"
                    value={selectedOption && selectedOption.value}
                    onChange={() => setDropDownOption()}
                    options={[
                        {value: 'zakupy', label: 'Zakupy'},
                        {value: 'spotkanie', label: 'Spotkanie'},
                        {value: 'transport', label: 'Transport'},
                        {value: 'asysta', label: 'Asysta'},
                    ]}
                />

                <FormMessage {...addressForm} name="message"/>
                <FormSubmitButton {...addressForm}>Dalej</FormSubmitButton>
            </Form>

            <Form {...contactForm} className={formStep !== 4 ? 'd-none' : ''}>
                <Button onClick={() => getLocation(setBrowserLocation)}>Lokalizuj mnie</Button>
                <FormLabel {...contactForm} name="message">
                    Podaj dane do kontaktu:
                </FormLabel>
                <Autocomplete
                    aria-autocomplete="both"
                    style={{width: '90%'}}
                    onPlaceSelected={(place) => {
                        parseAddres(place)
                    }}
                    types={['geocode']}
                    name="message"
                    componentRestrictions={{country: "pl"}}
                />

                <FormLabel {...contactForm} name="name">
                    Imię osoby ktora potrzebuje pomoc:
                </FormLabel>
                <FormInput {...contactForm} name="name"/>

                <FormLabel {...contactForm} name="telephone">
                    Numer telefonu:
                </FormLabel>
                <FormInput
                    {...contactForm}
                    name="telephone"
                />

                <FormMessage {...contactForm} name="message"/>
                <FormSubmitButton {...contactForm}>Dalej</FormSubmitButton>
            </Form>

            {formStep > 1 && <button onClick={() => prevStep()}> Wstecz</button>}
        </div>
    );
};


export default withValidation(PostAddForm);