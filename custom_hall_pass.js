{
  let bearer = ""
  let student_id = ""
  let school_id = ""
  let origin_id = ""
  let destination_id = ""
  let duration = "" // seconds
  let travel_type = "one_way"
  fetch("https://smartpass.app/api/prod-us-central/v1/hall_passes", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "authorization": "Bearer " + bearer,
      "build-date": "Thu Nov 17 18:53:36 UTC 2022",
      "build-release-name": "b4af408607cd3951c6c306e7a00934059245d15c",
      "content-type": "multipart/form-data; boundary=----WebKitFormBoundary3aZygDwWzeSBZKKq",
      "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "x-school-id": school_id
    },
    "referrer": "https://smartpass.app/app/main/passes",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "------WebKitFormBoundary3aZygDwWzeSBZKKq\r\nContent-Disposition: form-data; name=\"duration\"\r\n\r\n" + duration + "\r\n------WebKitFormBoundary3aZygDwWzeSBZKKq\r\nContent-Disposition: form-data; name=\"origin\"\r\n\r\n" + origin_id + "\r\n------WebKitFormBoundary3aZygDwWzeSBZKKq\r\nContent-Disposition: form-data; name=\"destination\"\r\n\r\n" + destination_id + "\r\n------WebKitFormBoundary3aZygDwWzeSBZKKq\r\nContent-Disposition: form-data; name=\"travel_type\"\r\n\r\n" + travel_type + "\r\n------WebKitFormBoundary3aZygDwWzeSBZKKq\r\nContent-Disposition: form-data; name=\"student\"\r\n\r\n" + student_id + "\r\n------WebKitFormBoundary3aZygDwWzeSBZKKq\r\nContent-Disposition: form-data; name=\"isNotBulk\"\r\n\r\ntrue\r\n------WebKitFormBoundary3aZygDwWzeSBZKKq--\r\n",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
}
