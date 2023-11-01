import * as Yup from "yup";

export const loginAndSignupSchema = Yup.object({
	email: Yup.string().email().required("Please Enter a valid email"),
	password: Yup.string().min(6).required("Enter a valid password"),
	signUpEmail: Yup.string().email().required("Please Enter a valid email"),
	signUpPassword: Yup.string().min(6).required("Enter a valid password"),
	signUpConfirmPassword: Yup.string()
		.required()
		.oneOf([Yup.ref("signUpPassword"), null], "Password must match"),
});

export const signupSchema = Yup.object({});
