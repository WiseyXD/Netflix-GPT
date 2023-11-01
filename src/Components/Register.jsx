import React from "react";
import { useFormik } from "formik";
import { loginAndSignupSchema } from "../schemas";

export default function Register({ setIsLogin, isLogin, handleLogin }) {
	const formik = useFormik({
		initialValues: {
			signUpEmail: "",
			signUpPassword: "",
			signUpConfirmPassword: "",
		},
		validationSchema: loginAndSignupSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	console.log(formik.errors);
	return (
		<div className="flex justify-center items-center">
			<form
				className="form-control w-full max-w-md bg-black px-7 py-7 opacity-90"
				onSubmit={formik.handleSubmit}
			>
				<h1 className="text-4xl font-semibold text-center text-white mb-4">
					Sign Up
				</h1>
				<div className="flex flex-col">
					<label className="label">
						<span className="label-text">Email</span>
					</label>
					<input
						type="text"
						placeholder="Valid Email"
						name="signUpEmail"
						className="input input-bordered w-full max-w-md"
						onChange={formik.handleChange}
						value={formik.values.signUpEmail}
						onBlur={formik.handleBlur}
					/>
					<label className="label">
						<span className="label-text">Password</span>
					</label>
					<input
						type="password"
						placeholder="Password"
						name="signUpPassword"
						className="input input-bordered w-full max-w-md"
						onChange={formik.handleChange}
						value={formik.values.signUpPassword}
						onBlur={formik.handleBlur}
					/>
					<label className="label">
						<span className="label-text">Confirm Password</span>
					</label>
					<input
						type="password"
						placeholder="Reconfirm Password"
						className="input input-bordered w-full max-w-md"
						name="signUpConfirmPassword"
						onChange={formik.handleChange}
						value={formik.values.signUpConfirmPassword}
						onBlur={formik.handleBlur}
					/>
					<button className="btn btn-xs sm:btn-sm md:btn-md bg-red-600 text-white mt-4">
						Sign Up
					</button>
					<br />
					<label className="label">
						<span className="label-text text-base">
							Already have an accout on{" "}
							<span className="text-red-500">Netflix</span> ?
							<a
								className="link ml-2 text-white"
								onClick={() => handleLogin()}
							>
								Sign in
							</a>
						</span>
					</label>
				</div>
			</form>
		</div>
	);
}
