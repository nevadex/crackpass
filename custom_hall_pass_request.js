{
  let bearer = ""
  let student_id = ""
  let school_id = ""
  let origin_id = ""
  let destination_id = ""
  let duration = "" // seconds
  fetch("https://smartpass.app/api/prod-us-central/v1/pass_requests", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "authorization": "Bearer " + bearer,
      "build-date": "Mon Dec 12 14:29:29 UTC 2022",
      "build-release-name": "5fb562088780a3f2b91d09165a238d83e35b701e",
      "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryHesTAajUG0Dwh1Hy",
      "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "x-school-id": school_id
    },
    "referrer": "https://smartpass.app/app/main/passes",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "------WebKitFormBoundaryHesTAajUG0Dwh1Hy\r\nContent-Disposition: form-data; name=\"origin\"\r\n\r\n" + origin_id + "\r\n------WebKitFormBoundaryHesTAajUG0Dwh1Hy\r\nContent-Disposition: form-data; name=\"destination\"\r\n\r\n" + destination_id + "\r\n------WebKitFormBoundaryHesTAajUG0Dwh1Hy\r\nContent-Disposition: form-data; name=\"attachment_message\"\r\n\r\n\r\n------WebKitFormBoundaryHesTAajUG0Dwh1Hy\r\nContent-Disposition: form-data; name=\"travel_type\"\r\n\r\nround_trip\r\n------WebKitFormBoundaryHesTAajUG0Dwh1Hy\r\nContent-Disposition: form-data; name=\"duration\"\r\n\r\n" + duration + "\r\n------WebKitFormBoundaryHesTAajUG0Dwh1Hy\r\nContent-Disposition: form-data; name=\"teachers\"\r\n\r\n" + student_id + "\r\n------WebKitFormBoundaryHesTAajUG0Dwh1Hy--\r\n",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
}
