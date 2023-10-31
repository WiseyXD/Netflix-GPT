import { useState } from "react";
import { useFormik } from "formik";
export default function Login() {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	const [isLogin, setIsLogin] = useState(false);
	return (
		<div className="flex justify-center items-center">
			{isLogin ? (
				<form
					className="form-control w-full max-w-md bg-black px-7 py-7 opacity-90"
					onSubmit={formik.handleSubmit}
				>
					<h1 className="text-4xl font-semibold text-center text-white mb-4">
						Login
					</h1>
					<div className="flex flex-col">
						<label className="label">
							<span className="label-text">
								Email or Username
							</span>
						</label>
						<input
							type="text"
							placeholder="Valid Email"
							className="input input-bordered w-full max-w-md"
							id="loginEmail"
							onChange={formik.handleChange}
							value={formik.values.loginEmail}
						/>
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input
							type="password"
							placeholder="Password"
							className="input input-bordered w-full max-w-md"
							id="LoginPassword"
							onChange={formik.handleChange}
							value={formik.values.LoginPassword}
						/>
						<button
							className="btn btn-xs sm:btn-sm md:btn-md bg-red-600 text-white mt-4"
							type="submit"
						>
							Sign In
						</button>
						<br />
						<label className="label">
							<span className="label-text text-base">
								New to{" "}
								<span className="text-red-500">Netflix</span>?
								<a
									className="link ml-2 text-white"
									onClick={() => setIsLogin(false)}
								>
									Sign up
								</a>
							</span>
						</label>
					</div>
				</form>
			) : (
				<div className="form-control w-full max-w-md bg-black px-7 py-7 opacity-90">
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
							className="input input-bordered w-full max-w-md"
						/>
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input
							type="password"
							placeholder="Password"
							className="input input-bordered w-full max-w-md"
						/>
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input
							type="password"
							placeholder="Password"
							className="input input-bordered w-full max-w-md"
						/>
						<label className="label">
							<span className="label-text">Confirm Password</span>
						</label>
						<input
							type="password"
							placeholder="Reconfirm Password"
							className="input input-bordered w-full max-w-md"
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
									onClick={() => setIsLogin(true)}
								>
									Sign in
								</a>
							</span>
						</label>
					</div>
				</div>
			)}
		</div>
	);
}
