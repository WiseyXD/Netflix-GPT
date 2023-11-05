import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";
import { useFirebase } from "../Context/firebase";
import { useSelector } from "react-redux";
import store from "../Context/store";
export default function Register({ handleLogin }) {
	const firebaseError = useSelector((state) => state.auth.value);
	console.log(firebaseError);
	const firebase = useFirebase();
	const formik = useFormik({
		initialValues: {
			signUpEmail: "",
			signUpPassword: "",
			signUpConfirmPassword: "",
		},
		validationSchema: signupSchema,
		onSubmit: (values) => {
			firebase.signUpWithEmailAndPassword(
				values.signUpEmail,
				values.signUpConfirmPassword
			);
		},
	});

	return (
		<div className="flex justify-center items-center">
			<div className="w-full max-w-md bg-black px-7 py-7 opacity-90">
				<form className="form-control " onSubmit={formik.handleSubmit}>
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
						{formik.errors.signUpEmail && (
							<label className="label">
								<span className="label-text-alt text-red-500">
									{formik.errors.signUpEmail}
								</span>
							</label>
						)}

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
						{formik.errors.signUpPassword && (
							<label className="label">
								<span className="label-text-alt text-red-500">
									{formik.errors.signUpPassword}
								</span>
							</label>
						)}
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
						{formik.errors.signUpConfirmPassword && (
							<label className="label">
								<span className="label-text-alt text-red-500">
									{formik.errors.signUpConfirmPassword}
								</span>
							</label>
						)}
						{/* {firebaseError && (
							<label className="label">
								<span className="label-text-alt text-red-500">
									{firebaseError}
								</span>
							</label>
						)} */}
						<button
							className="btn btn-xs sm:btn-sm md:btn-md bg-red-600 text-white mt-4"
							type="submit"
						>
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
				<button
					className="btn btn-xs sm:btn-sm md:btn-md w-full hover:bg-red-600 hover:text-white text-red-500 mt-4"
					onClick={() => firebase.googleSignIn()}
					type="button"
				>
					Sign Up using Google
				</button>
			</div>
		</div>
	);
}
