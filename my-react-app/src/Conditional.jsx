// function ProductList() {
//     const products = [
//         { id: 1, name: 'Product 1', price: 10 },
//         { id: 2, name: 'Product 2', price: 20 },
//         { id: 3, name: 'Product 3', price: 30 },
//         { id: 4, name: 'Product 4', price: 40 },
//     ];

//     return (
//         <div>
//             {
//                 products.map((product) =>
//                     <div key={product.id}>
//                         <h2>{product.name}</h2>
//                         <p>${product.price}</p>
//                     </div>
//                 )
//             }
//         </div>
//     )
// }
// export default ProductList;


function StudentList() {
    const students = [
        { id: 1, name: 'Priya', course: 'BTECH' },
        { id: 2, name: 'Sneha', course: 'BAC' },
        { id: 3, name: 'Rutuja', course: 'IT' },
    ];

    return (
        <>
            <style>
                {`
       

        `}
            </style>


            <div>
                <h2>Student details</h2>
                <p>Total Students: {students.length}</p>

                {students.map((student) => (
                    <div key={student.id}>
                        <h3>{student.name}</h3>
                        <p>{student.course}</p>
                    </div>
                ))}

            </div>
        </>
    );
}
export default StudentList;