import React from 'react';
import {
    unstable_Form as Form,
    unstable_FormInput as FormInput,
    unstable_FormLabel as FormLabel,
    unstable_FormMessage as FormMessage,
    unstable_FormSubmitButton as FormSubmitButton,
    unstable_FormRemoveButton as FormRemoveButton,
    unstable_FormPushButton as FormPushButton,
    unstable_useFormState as useFormState
} from "reakit/Form";
import withValidation from "../withValidation";

const form = useFormState({
    values: {
        people: [{name: "", email: ""}]
    },
    onValidate: values => {
        const errors = {};
        values.people.forEach((value, i) => {
            if (!value.email) {
                if (!errors.people) {
                    errors.people = [];
                }
                if (!errors.people[i]) {
                    errors.people[i] = {};
                }
                errors.people[i].email =
                    "We can't sell data without an email, can we?";
            }
        });
        if (Object.keys(errors).length) {
            throw errors;
        }
    },
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
    }
});

const login = () => {
    return (
        <Form {...form}>
            {form.values.people.map((_, i) => (
                <React.Fragment key={i}>
                    <FormLabel {...form} name={["people", i, "name"]}>
                        Name
                    </FormLabel>
                    <FormInput {...form} name={["people", i, "name"]}/>
                    <FormMessage {...form} name={["people", i, "name"]}/>
                    <FormLabel {...form} name={["people", i, "email"]}>
                        Email
                    </FormLabel>
                    <FormInput {...form} type="email" name={["people", i, "email"]}/>
                    <FormMessage {...form} name={["people", i, "email"]}/>
                    <FormRemoveButton {...form} name="people" index={i}>
                        Remove person
                    </FormRemoveButton>
                </React.Fragment>
            ))}
            <br/>
            <br/>
            <FormPushButton {...form} name="people" value={{name: "", email: ""}}>
                Add person
            </FormPushButton>
            <FormSubmitButton {...form}>Submit</FormSubmitButton>
        </Form>
    );
};

export default withValidation(login);
