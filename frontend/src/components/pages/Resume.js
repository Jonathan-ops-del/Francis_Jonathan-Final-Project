import React from "react";
import {Link} from "react-router-dom";


function Resume(){
   return(
     
     <div>
         <body className="resume-pg-body"> 
            
           <header className="resume-pg-header"> 
              
              <nav>
                    <ul className="resume-pg-ul-2">
                        <li className="resume-pg-li-2"><Link className="resume-pg-li-2-a"to={"CoverLetter"}>Cover Letter</Link></li>
                        <li className="resume-pg-li-2"><Link className="resume-pg-li-2-a"to={"Transcript"}>Transcript</Link> </li>
                    </ul>
             </nav>
           
            <h1 className="resume-pg-h1">Jonathan Francis</h1>
       
         </header>
    
    
    <main className="resume-pg-main">  
        
        <section>
          <div className="resume-pg-container">
            
            <fieldset className="resume-pg-fieldset">
                <legend className="resume-pg-legend">
                    <h3>Professional Profile</h3>
                 </legend>
                    <p className="resume-pg-p1">My name is Jonathan Francis. I have over ten years of experience in the Hospitality Industry, working specifically in the Finance Sector in the last seven years. Most recently, I have embarked on a journey in the Technology field specifically Point of Sales Technology in the Hospitality Industry. My consistent Hard-Work, Discipline, & Enthusiam have allowed me to grow continuously as todays' Industries continue to change & diversify. I believe my diverse skill-set, experience, & educational background are unique & enable me to bring diversity in a Team & Individual setting.</p>
            </fieldset>
            
            <fieldset className="resume-pg-fieldset">
                <legend className="resume-pg-legend">
                     <h3>Experience</h3>
                </legend>
                    <h5 className="resume-pg-h5">SilverWare POS Inc. (2018-Current)</h5>
                    <h4 className="resume-pg-h4">Accounts Receivable Manager</h4>
                        <p className="resume-pg-p">Manage Current Receivables cross all three Entities within the company. Responsible for having Accounts in good standing & managing a standard cash flow from Receivables on a monthly basis. Managing my team to achieve the best results & produce efficient reports for my month-end procedures. Overlook all Billings & Cash Applications. Ensuring Our clients receive their renewal invoices thirty days prior to expiration. Managing our Fixed Asset & Liabilities Account, ensuring these accounts are reconciled & have supporting documentation.</p>
                
                
                    <h5 className="resume-pg-h5">Recipe Unlimited Corp. (2018-2018)</h5>
                    <h4 className="resume-pg-h4">Accounts Receivable Analyst</h4>
                        <p className="resume-pg-p">Uploading all sales data for the Corporate & Franchise stores. Having these sales data inputted into the system prior to month end for our Senior Accountants. Maintaining a good standing Aging Report & Ensuring payments are applied to the correct accounts. Provding monthly statements to our clients, & ensuring excellent client based experience. Working closely with our IT Deparment to ensure any new upload procedures are implemented smoothly to the Accounting Software. </p>
                
                
                    <h5 className="resume-pg-h5">Pickle Barrel Head Office. (2015-2017)</h5>
                    <h4 className="resume-pg-h4">Accounts Receivable Clerk</h4>
                        <p className="resume-pg-p">Responsible for all House Account Billings & Collections for both the Restaurant & Catering Division. Ensure Cash Applications are completed prior to month end. Deposits are taken to the bank & Wire Transfers are confirmed with communication with Bookkeeper. Assist with all yearly tax procedures. Responsible for the Rebate Program & ensuring all rebates are accounted for & invoiced.</p>
                
                
                    <h5 className="resume-pg-h5">Rose Reisman Catering. (2013-2015)</h5>
                    <h4 className="resume-pg-h4">Accounts Payable Clerk</h4>
                        <p className="resume-pg-p">Overlook all Accounts Payable Duties. Perform day to day AP transactions, inlcluding verifying, matching, classNameifying, computing, posting and entering invoices. Setting up new vendors & Run weekly check payments.  Recording Intercompany Transactions. Investigate Vendor Transactions and Contact Vendors when necessary. Weekly filing of invoices.</p>
                
                </fieldset>
                
            
            <fieldset className="resume-pg-fieldset">
                <legend className="resume-pg-legend">
                    <h3 >Education</h3>
                </legend>
                    <dl>
                        <dt>York University</dt>
                            <dd>Certificate in Full Stack Web Development</dd>
                            <dd>In Progress</dd>
                
                        <dt>Centennial College</dt>
                            <dd>Accounting Diploma</dd>
                            <dd>2014-2015</dd>
                
                        <dt>University of Toronto</dt>
                            <dd>Bachelors of Science</dd>
                            <dd>2009-2013</dd>
                    </dl>
            </fieldset>
                           
            
            <fieldset className="resume-pg-fieldset">
                <legend className="resume-pg-legend">
                    <h3>System Experience</h3>
                </legend>
    
                    <ul className="resume-pg-ul">
                        <li>Advance experience in MS Office Applications</li>
                        <li>Visual Tax - Personal & Corporate Taxation</li>
                        <li>Sage Simply Accounting</li> 
                        <li>Quick Books</li>
                        <li>MYOB (Mind Your Own Business Accounting Software)</li>
                        <li>JD Edwards Accounting Software</li>
                </ul>
            </fieldset>
            
            </div>
        
        </section>
    </main>
  </body> 
</div>

    )    
}

export default Resume;