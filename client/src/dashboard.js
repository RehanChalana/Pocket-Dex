const submitBtn = document.querySelector(".m-b-r-top-form-submit");

submitBtn.addEventListener("click",addTransaction);

async function addTransaction(event) {
    event.preventDefault();
    
    let amount = document.querySelector(".m-b-r-top-form-amount").value;
    let title = document.querySelector(".m-b-r-top-form-title").value;
    let date = document.querySelector(".m-b-r-top-form-date").value;
    let category = document.querySelector(".m-b-r-top-form-category").value;

    const url = "http://localhost:8080/transaction";
    const data = {
        "user_id":1,
        "wallet_id":1,
        "transaction_amount":amount,
        "transaction_title":title,
        "transaction_date":date,
        "transaction_category":category
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        console.log('Response Status:', response.status)
    } catch (error) {
        console.error('Error:', error);
    }
}