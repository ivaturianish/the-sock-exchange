document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name =  document.getElementById('name').value;
        const email =  document.getElementById('email').value;

        const data = {
            name: name,
            email: email
        };

        try{
            const response = await fetch('http://localhost:9000/api/register',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if(response.ok){
                document.getElementById('message').textContent = 'Success!';
                document.getElementById('message').classList.add('text-success');
                console.log('success',JSON,stringify(result,null,2));
            }else{
                document.getElementById('message').textContent = 'Failed';
                document.getElementById('message').classList.add('text-danger');
            }

        } catch (error){
            console.error('error:',error);
        }
    })
})