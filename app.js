function hospital(args){
    let days = Number(args[0]);
    let doctor = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
  
    for(let i = 1; i <= days; i++){
        let currentPatient = args[i];
        if ((i % 3 == 0) && (untreatedPatients > currentPatient)){
            doctor++;
        }
  
        if(currentPatient <= doctor){
            treatedPatients += currentPatient;
        } else{
            untreatedPatients = untreatedPatients + (currentPatient - doctor);
            treatedPatients += doctor;
        }
   }
    console.log("Treated patients - " + treatedPatients);
    console.log("Untreated patients - " + untreatedPatients);
}

hospital([4,7,27,9,1]);
