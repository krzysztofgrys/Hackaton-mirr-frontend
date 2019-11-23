import React from 'react';
import {
    unstable_Form as Form,
    unstable_FormLabel as FormLabel,
    unstable_FormMessage as FormMessage,
    unstable_FormInput as FormInput,
    unstable_useFormState as useFormState,
    unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
import withValidation from "../with-validation";
import {addPostFirstStepForValidationSchema} from "../validation-schemes";

const PostAddStep1 = (props) => {
    const form = useFormState({
        values: {expirationTime: ""},
        onValidate: props.validate(),
        resetOnUnmount: true,
        onSubmit: (data) => {
            props.addFormData(data);
            props.nextStep()
        }
    });

    return (
        <Form {...form}>
            <FormLabel {...form} name="message">
                Message
            </FormLabel>
            <FormInput
                {...form}
                name="message"
                placeholder="What's on your mind?"
                as="textarea"
            />
            <FormMessage {...form} name="message" />
            <FormSubmitButton {...form}>Submit</FormSubmitButton>
        </Form>
    );
};

export default withValidation(PostAddStep1, addPostFirstStepForValidationSchema);