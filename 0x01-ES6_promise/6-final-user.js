import signUpUser from "./4-user-promise.js"
import uploadPhoto from "./5-photo-reject.js"
export default function handleProfileSignup(firstName, lastName, fileName){
	const signUp = signUpUser(firstName, lastName);
	const upload = uploadPhoto(fileName);

	const obj = [];
	return Promise.allSettled([signUp, upload]).
		then((results) => results.forEach((result) => { 
			if(result.status == "fulfilled"){
				obj.push(result);
			}else {
				obj.push(
					{
						status: result.status,
						value: result.reason.meassage,
					});
			};
			return obj;
		}));

}
