import React, {useState} from 'react';
import PostStep1 from "./post-add-step1";
import PostStep2 from "./post-add-step2";
import PostStep3 from "./post-add-step3";
import PostStep4 from "./post-add-step4";
import {
    unstable_Form as Form, unstable_FormInput as FormInput,
    unstable_FormLabel as FormLabel,
    unstable_FormMessage as FormMessage,
    unstable_FormRadio as FormRadio,
    unstable_FormRadioGroup as FormRadioGroup,
    unstable_FormSubmitButton as FormSubmitButton,
    unstable_useFormState as useFormState
} from "reakit";
import withValidation from "../with-validation";
import {addPostFirstStepForValidationSchema, addPostSecondStepForValidationSchema} from "../validation-schemes";


const FormStep = (props) => {
    const {formStep} = props;
    switch (formStep) {
        case 1:
            return <PostStep1 {...props}/>;
        case 2 :
            return <PostStep2 {...props}/>;
        case 3:
            return <PostStep3 {...props}/>;
        case 4:
            return <PostStep4 {...props}/>;
        default:
            return <div>Error</div>
    }
};

const PostAddForm = (props) => {
    const [formStep, setFormStep] = useState(1);
    const [formData, updateFormData] = useState({});

    console.log(formData);
    const insertFormData = (data) => {
        updateFormData({...formData, ...data})
    };

    const expirationDateForm = useFormState({
        values: {expirationDate: ""},
        onValidate: props.validate(addPostFirstStepForValidationSchema),
        onSubmit: (a) => {
            insertFormData(a)
            nextStep()
        }
    });

    const descriptionOfThePersonForm = useFormState({
        values: {tag: "", category: "", description: ""},
        onValidate: props.validate(addPostSecondStepForValidationSchema),
        onSubmit: (a) => {
            insertFormData(a)
            nextStep()
        }
    });

    const addressForm = useFormState({
        values: {street: "",  houseNumber: "", },
        onValidate: props.validate(addPostSecondStepForValidationSchema),
        onSubmit: (a) => {
            insertFormData(a)
            nextStep()
        }
    });


    const contactForm = useFormState({
        values: {telephoneNumber: "", personName: ""},
        onValidate: props.validate(addPostSecondStepForValidationSchema),
        onSubmit: (a) => {
            insertFormData(a)
            nextStep()
        }
    });

    const nextStep = () => setFormStep(formStep + 1);
    const prevStep = () => setFormStep(formStep - 1);

    return (
        <div className='d-flex flex-column'>
            <div className='d-flex justify-content-around  border-bottom'>
                <div>Strona główna > Dodaj ogłoszenie</div>
                <div> Form step: {formStep}</div>
            </div>
            <div className='p-2'> Nowe ogłoszenie:</div>
            <Form {...expirationDateForm} className={formStep !== 1 && 'd-none'}>
                <FormRadioGroup {...expirationDateForm} name="expirationTime" id="expirationTime">
                    <FormLabel {...expirationDateForm} as="legend" name="expirationTime">Wybierz termin wygaśnięcia
                        ogłoszenia</FormLabel>
                    <label><FormRadio {...expirationDateForm} name="expirationTime" value="3 days"/> Po 3 dniach </label>
                    <label><FormRadio {...expirationDateForm} name="expirationTime" value="5 days"/> Po 5 dniach </label>
                    <label><FormRadio {...expirationDateForm} name="expirationTime" value="week"/> Po tygodniu </label>
                    <label><FormRadio {...expirationDateForm} name="expirationTime" value="month"/> Po miesiacu </label>
                </FormRadioGroup>

                <FormMessage {...expirationDateForm} name="selectPostType"/>
                <FormSubmitButton {...expirationDateForm}>Submit</FormSubmitButton>
            </Form>

            <Form {...descriptionOfThePersonForm} className={formStep !== 2 && 'd-none'}>>
                <FormLabel {...descriptionOfThePersonForm} name="message">
                    Dodaj treść ogłoszenia:
                </FormLabel>
                <FormInput
                    {...descriptionOfThePersonForm}
                    name="message"
                    placeholder="What's on your mind?"
                    as="textarea"
                />
                <FormMessage {...descriptionOfThePersonForm} name="message" />
                <FormSubmitButton {...descriptionOfThePersonForm}>Submit</FormSubmitButton>
            </Form>

            <Form {...descriptionOfThePersonForm} className={formStep !== 3 && 'd-none'}>>
                <FormLabel {...descriptionOfThePersonForm} name="message">
                    Dodaj treść ogłoszenia:
                </FormLabel>
                <FormInput
                    {...descriptionOfThePersonForm}
                    name="message"
                    placeholder="What's on your mind?"
                    as="textarea"
                />
                <FormMessage {...descriptionOfThePersonForm} name="message" />
                <FormSubmitButton {...descriptionOfThePersonForm}>Submit</FormSubmitButton>
            </Form>


            <Form {...descriptionOfThePersonForm} className={formStep !== 4 && 'd-none'}>>
                <FormLabel {...descriptionOfThePersonForm} name="message">
                    Dodaj treść ogłoszenia:
                </FormLabel>
                <FormInput
                    {...descriptionOfThePersonForm}
                    name="message"
                    placeholder="What's on your mind?"
                    as="textarea"
                />
                <FormMessage {...descriptionOfThePersonForm} name="message" />
                <FormSubmitButton {...descriptionOfThePersonForm}>Submit</FormSubmitButton>
            </Form>
        </div>
    );
};


export default withValidation(PostAddForm);