// Factory Function
function createStudentFactory(name, age, rank, country) {
    return {
        name,
        age,
        rank,
        country
    };
}

// Constructor Function
function StudentConstructor(name, age, rank, country) {
    this.name = name;
    this.age = age;
    this.rank = rank;
    this.country = country;
}

function createStudents() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const rank = parseInt(document.getElementById('rank').value);
    const country = document.getElementById('country').value;

    // Create student using Factory function
    const student1 = createStudentFactory(name, age, rank, country);

    // Create student using Constructor function
    const student2 = new StudentConstructor(name, age, rank, country);

    // Display results
    const output = document.getElementById('output');
    console.log("With Factory Function" + JSON.stringify(student1, null, 2));
    console.log("With Constructor Function" + JSON.stringify(student2, null, 2));
    output.textContent = `Factory Function Student:\n${JSON.stringify(student1, null, 2)}\n\n` +
                            `Constructor Function Student:\n${JSON.stringify(student2, null, 2)}`;
}