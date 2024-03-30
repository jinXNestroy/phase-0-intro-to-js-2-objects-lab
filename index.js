const employee = {
    name: 'Daniel', streetAddress: '2102'

};

function updateEmployeeWithKeyAndValue(object, key, value) {
    let updateEm = {
        ...object
    };
    updateEm[key] = value;
    return updateEm;

}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;

}

function deleteFromEmployeeByKey(employee, key) {
    let deleteEm = {
        ...employee
    };
    delete deleteEm[key]
    return deleteEm

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}

