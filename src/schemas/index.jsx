import * as Yup from "yup";

export const loginSchema = Yup.object({
	email: Yup.string().email().required("Please Enter a valid email"),
	password: Yup.string().min(6).required("Enter a valid password"),
});

export const signupSchema = Yup.object({
	signUpEmail: Yup.string().email().required("Please Enter a valid email"),
	signUpPassword: Yup.string().min(6).required("Enter a valid password"),
	signUpConfirmPassword: Yup.string()
		.required("Confirm Password is required field")
		.oneOf([Yup.ref("signUpPassword"), null], "Password must match"),
});
