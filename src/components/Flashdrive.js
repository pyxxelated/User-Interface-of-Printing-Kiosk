import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { listAll, getDownloadURL, ref as sRef } from 'firebase/storage'
import { database, storage  } from '../config/firebase'
import { onValue, set, ref, get, child } from 'firebase/database'
import './Bluetooth.css'


function Flashdrive()
{
    const navigate = useNavigate(); //FOR PAGE NAVIGATION

    //SELECTING A FILE
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const fileUrl = URL.createObjectURL(file);
          setSelectedFile(fileUrl);
        }
    };



//testing
const simulateEnterKeyPress = () => {
  alert('Enter key pressed!');
  const event = new KeyboardEvent('keydown', {
    key: 'Enter',
    code: 'Enter',
    keyCode: 13,
    which: 13,
    bubbles: true,
    cancelable: true,
  });

  const target = document.activeElement; // Assuming you want to trigger the event on the currently focused element
  target.dispatchEvent(event);
};










  //PRINT
    const HandlePrintFile = () => {
        if (selectedFile) {

          const printWindow = window.open(selectedFile);
          printWindow.print();

          


          setTimeout(() => {
            const enterKeyEvent = new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13 });
            document.dispatchEvent(enterKeyEvent);


            if(enterKeyEvent){
              alert("sample");
            }
          }, 1000);




          


          
        }
      };

  

     
      

      //increment/decrement/pages
      const [pages, setPages] = useState(0);
      const minCount = 1;
      const maxCount = 1;
      const steps = 1;
      
      const handleIncrement = () => {
        if(pages + steps <= maxCount){
            setPages(pages + steps);
            set(ref(database, 'pages'), pages + steps);
            set(ref(database, 'total/page'), pages + steps);
        }
    
    };

      const handleDecrement = () => {
        if(pages - steps >= minCount){
            setPages(pages - steps);
            set(ref(database, 'pages'), pages - steps);
            set(ref(database, 'total/page'), pages - steps);
        }};

      useEffect(() => {
        const pagesRef = ref(database, 'pages/');
        const unsubscribe = onValue(pagesRef, (snapshot) => {
          const val = snapshot.val();
          setPages(val);
        });

        return () => unsubscribe();
      }, []);


    //TESTING
      const [copies, setCopies] = useState(1);
      const [colorMode, setColorMode] = useState('color');
      const [estimatedPrice, setEstimatedPrice] = useState(0);
    
      useEffect(() => {
        updateEstimatedPrice();
      }, [copies, colorMode]);

    
    
      function calculatePrintPrice() {
        const pricePerCopy = colorMode === 'color' ? 3 : 2; // Adjust these values as needed
        return copies * pricePerCopy;
      }
    
      function updateEstimatedPrice() {
        const price = calculatePrintPrice();
        setEstimatedPrice(price);
        set(ref(database, 'amount/'), price);
        
      }
    
      function incrementCopies() {
        setCopies(copies + 1);
      }
    
      function decrementCopies() {
        if (copies > 1) {
          setCopies(copies - 1);
        }
      }

     

    //fetch coins
    const [coins, setCoins] = useState([]);
            useEffect(() => {
              const dataRef = ref(database, 'coins/');
              const unsubscribe = onValue(dataRef, (snapshot) => {
                setCoins(snapshot.val());
              });
              
              return () => {
                unsubscribe();
              };
            }, []);

    
    
    const [insertedCoins, setInsertedCoins] = useState(0);
    const [amount, setAmount] = useState(100);
    const isPrintEnabled = amount <= insertedCoins;

    const handlePrint = () => { console.log('Printing...'); }
  
            useEffect(() => {
              const insertedRef = ref(database, 'coins/');
              const totalRef = ref(database, 'amount/');

              const insertListener = onValue(insertedRef, (snapshot) =>{
                const value = snapshot.val();
                setInsertedCoins(value);
              });

              const totalListener = onValue(totalRef, (snapshot) =>{
                const value = snapshot.val();
                setAmount(value);
              });

              return () => {
                insertListener('value');
                totalListener('value');
              };
            }, []);
       
          
            
  
    

  return (
    <div className='select-container'>
        <video src={require ('../../src/images/pupviid.mp4')} autoPlay loop muted />
          <div className='c-screen'>
            <div className='up-body'>
                 
                 {/* --- Header --- */}
                <div className='header'>
                    <div className='logo'>
                        <img src={require ('../../src/images/pup.png')} alt="pup logo" onClick={()=>navigate('/Upsec')}/>
                    </div>
                    <div className='puptitle'>
                        <p> Polytechnic University of the Philippines </p>
                    </div> 
                </div>

                {/* --- Body --- */}
                <div className='cont-sec'>
                  <div className='pdfviewer-cont'>
                    <div className='pdfcont'>
                     {selectedFile &&  (
                      <iframe  type="application/pdf" 
                        title="Selected File"
                        src={`${selectedFile}#toolbar=0`}
                        style={{ width: '100%', height: '100%' }}
                      />
                    )}
                    </div>
                    <div className='s-files'>
                    <input type="file" onChange={handleFileChange} />
                    </div>
                  </div>
                  <div className='print-cont'>
                     <div className='pcont'>
                      <div className='pheader'>
                        <p> No. of Copies: </p> 
                      </div>
                      <div className='input-group'>
                        <div className='input'>
                          <button type='button' onClick={ decrementCopies} className='input-group-text'>-</button>
                          <div className='form-cntrol'>  {copies} </div>
                          <button type='button' onClick={ incrementCopies} className='input-group-text'>+</button>
                          </div>
                      </div>
                    </div>
                    <div className='pcont1'>
                      <div className='pheader1'>
                        <p> Total no. of Pages: </p> 
                      </div>
                      <div className='input-group'>
                      <div className='input'>
                          <button type='button' onClick={ handleDecrement} className='input-group-text'>-</button>
                            <div className='form-cntrol'>  {pages} </div>
                          <button type='button' onClick={ handleIncrement} className='input-group-text'>+</button>
                      </div>
                      </div>
                    </div>
                    <div className='pcont '>
                      <div className='pheader2'>
                        <p> Layout: </p> 
                      </div>
                      <div className='dropdown'>
                        <select>
                        <option value="base" disabled>Select an option</option>
                          <option value="false">  Short</option>
                          <option value="true" disabled>  Long</option>
                    
                        </select>
                      </div>
                    </div> 
                    <div className='pcont1 '>
                      <div className='pheader2'>
                        <p> Colored: </p> 
                      </div>
                      <div className='dropdown'>
                        <select  value={colorMode} onChange={(e) => setColorMode(e.target.value)}>
                        <option value="" disabled>Select an option</option>
                          <option value="color">  Yes</option>
                          <option value="bw">  No</option>
                        </select>
                      </div>  
                    </div> 
                    <div className='pcont3'>
                    <div className='t-price'> 
                         <p> Total Price: </p> 
                      </div>
                    <div className='i-coins'>
                        <p> Inserted coins: </p> 
                    </div>
                    <div className='t-price-cont'> {estimatedPrice.toFixed(2).replace('.00', '')} </div>
                    <div className='i-coins-cont'> {coins} </div>
                    </div>
                    <div className='pbtn-cont'>
                      <div className='btn-print'>
                      <button type='button' id="printbutton" onClick={HandlePrintFile} disabled={!isPrintEnabled} target="_top"> PRINT </button>
                      </div>
                     </div> 
                    </div> 
                  </div>
                </div>
            </div>
        </div>
  )
}

// {fileList.map((url)=>{

export default Flashdrive
