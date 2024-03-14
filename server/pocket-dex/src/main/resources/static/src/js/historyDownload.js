
const pdfBtn = document.querySelector(".pdf-btn");

const excelBtn = document.querySelector(".excel-btn");
// defining function 

      // Call the function with your data
      function generatePdf(data) {
        const doc = new jsPDF();
        let y = 10;
        data.forEach((transaction, index) => {
          doc.text(`Transaction ${index + 1}:`, 10, y);
          y += 5;
          Object.keys(transaction).forEach((key) => {
            doc.text(`${key}: ${transaction[key]}`, 10, y);
            y += 5;
          });
          y += 5; // Space between transactions
        });
        doc.save('transactions.pdf');
      }
      
      // Event listener for PDF button click
      pdfBtn.addEventListener("click", function() {
        // Fetch data and then generate PDF
        fetchData().then(data => {
          generatePdf(data);
        });
      });

      function exportToExcel(data) {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        saveExcelFile(excelBuffer, 'transactions.xlsx');
      }
  
      // Function to save Excel file
      function saveExcelFile(buffer, fileName) {
        const blob = new Blob([buffer], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);
      }

    

    excelBtn.addEventListener("click" , function() {
        fetchData().then(data => {
            exportToExcel(data);
        })
    })
