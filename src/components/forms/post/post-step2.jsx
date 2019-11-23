import React from 'react';
import {
    unstable_Form as Form,
    unstable_FormLabel as FormLabel,
    unstable_FormMessage as FormMessage,
    unstable_FormRadio as FormRadio,
    unstable_FormRadioGroup as FormRadioGroup,
    unstable_useFormState as useFormState
} from "reakit/Form";
import withValidation from "../with-validation";
import {addPostFirstStepForValidationSchema} from "../validation-schemes";

const PostFormStep1 = (props) => {
    const form = useFormState({
        values: {expirationTime: ""},
        onValidate: props.validate(),
        onSubmit: (props) => props.nextStep()
    });

    return (
        <Form {...form}>
            <FormRadioGroup {...form} name="expirationTime"  id="expirationTime">
                <FormLabel {...form} as="legend" name="expirationTime">Okresc profil osoby:</FormLabel>
                <label><FormRadio {...form} name="expirationTime" value="week"/> Po tygodniu </label>
                <label><FormRadio {...form} name="expirationTime" value="month"/> Po miesiacu </label>
            </FormRadioGroup>

            <FormMessage {...form} name="selectPostType"/>

            <button onClick={form.submit}> Next Step</button>
            <button onClick={() =>  props.prevStep()} > Prev Step</button>

        </Form>
    );
};

export default withValidation(PostFormStep1, addPostFirstStepForValidationSchema);