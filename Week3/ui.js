export const renderTable = (data) => {

    const table = document.getElementById("tableBody");

    table.innerHTML = data.map(({ name, empid, dept, photo }, i) => `
        <tr>
            <td>${name}</td>
            <td>${empid}</td>
            <td>${dept}</td>
            <td>
                <div class="photo-box">
                    <img src="${photo}">
                </div>
            </td>
            <td>
                <button onclick="deleteFaculty(${i})">Delete</button>
            </td>
        </tr>
    `).join("");
};