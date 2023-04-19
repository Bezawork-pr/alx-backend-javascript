export default function getFullResponseFromAPI(success)
{
	return new Promise(function(myResolve, myReject) {
		if (success == true){
			return myResolve({status: 200, body: 'Success'});
		} else {
			myReject(new Error("The fake API is not working currently"));
		}
	});
}

