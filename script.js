const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const email2 = document.getElementById('email2');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const password3 = document.getElementById('password3');


form.addEventListener('submit', e =>
    {
       e.preventDefault();
       
       validateInputs();
      
    }
);
const setError = (element, message) => 
{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

const setSuccess = (element, message) =>
{
    
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const isValidEmail = email =>
    {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

const validateInputs = () =>
{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const email2Value = email2.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const password3Value = password3.value.trim();
    

    if(usernameValue === '')
    {
        setError(username,'Username is required');
    }
    else
    {
        setSuccess(username,'');
        
    }

    if(emailValue === '')
    {
        setError(email,'Email is required');
    }
    else if
 
        (!isValidEmail(emailValue))
        {
            setError(email,'Provide a valid email address');
        }
        else
        {
            setSuccess(email,'');

        }

        if(email2Value === '')
        {
        setError(email2,'Email is required');
        }
       else if
 
        (email2Value !== emailValue)
        {
            setError(email2,'Provide a valid email address');
        }
        else
        {
            setSuccess(email2,'');
        }
       
        if(passwordValue === '')
        {
        setError(password,'password is required');
        }
        else if
 
        (passwordValue.length < 8)
        {
            setError(password,'Password must be at least 8 chaeacter.');
        }
        else
        {
            setSuccess(password,'');
        }

        
    if(password2Value === '')
        {
        setError(password2,'please confirm your password');
         }
        else if
 
        (password2Value !== passwordValue)
        {
            setError(password2,"Password dosen't match");
        }
        else
        {
            setSuccess(password2,'');
             var timer = setTimeout(function() {
             window.location.href = "signup1.html"
        }, 90000);

        }
    

        if(password3Value === '')
        {
        setError(password3,'please confirm your password');
        }
        else if
 
        (password3Value !== password2Value)
        {
            setError(password3,"Password dosen't match to previous password");
        }
        else
        {
         setSuccess(password3,'');
         var timer = setTimeout(function() {
             window.location.href = "kokan.html"
        }, 4000);
        
        
       

        }       
    
        
   
    
};




































































