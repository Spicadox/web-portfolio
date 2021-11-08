import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Heading, Button, Input, Textarea } from "@chakra-ui/react"
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/form-control"
import { Formik, Form, Field } from 'formik'
import emailjs from 'emailjs-com';


function contact() {
    function validateName(value) {
        let error
        if (!value) {
            error = "Name is required"
        }
        return error
    }
    function validateEmail(value) {
        let error
        if (!value) {
            error = "Email is required"
        } else if (!value.includes("@") || value[0] == "@" || !value.includes(".com")) {
            error = "Please enter a valid email"
        }
        return error
    }
    function validateMessage(value) {
        let error
        if (!value) {
            error = "Message is required"
        }
        return error
    }

    function SendEmail(object) {
        const { REACT_APP_SERVICEID, REACT_APP_TEMPLATEID, REACT_APP_USERID } = process.env
        emailjs.send(REACT_APP_SERVICEID, REACT_APP_TEMPLATEID, object, REACT_APP_USERID)
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }

    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    return (
        <Box id="Contact" margin="auto" marginTop="10em" padding="10" maxW="1000px" bg="gray" borderRadius="2xl" style={{ backgroundColor: 'rgba(52, 52, 52, 0.9)' }}>
            <Heading fontSize="6xl">Contact Me</Heading>
            <Formik padding="2em"
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2))
                        SendEmail(values)
                        actions.setSubmitting(false)
                        actions.setStatus("Submitted ✅")
                    }, 1000)
                }}
            >
                {(props) => (
                    <Form className="contact_form">
                        <Field name="name" validate={validateName}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor="name">Name</FormLabel>
                                    <Input {...field} id="name" placeholder="Name" />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="email" validate={validateEmail}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input {...field} type="email" id="email" placeholder="Email" />
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="message" validate={validateMessage}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.message && form.touched.message}>
                                    <FormLabel htmlFor="message">Message</FormLabel>
                                    <Textarea {...field} id="message" placeholder="Message" />
                                    <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Button
                            mt={4}
                            colorScheme="blue"
                            isLoading={props.isSubmitting}
                            type="submit"
                        >
                            {props.status === "Submitted ✅" ? props.status : "Submit"}
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>



    )
}

export default contact
