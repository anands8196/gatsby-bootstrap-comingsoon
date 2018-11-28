import React, {Component} from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'



class Subscribe extends Component{

onSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.yourmail.value || null;

    if(!email){
        return;
    }

    try{
        const result = await addToMailchimp(email, {});
        console.log(result.msg);
    }catch(err){
        console.log(err);
    }

 //console.log(email);
};
  render(){
      return(
       <form onSubmit={this.onSubmit}>
            <div className="input-group input-group-newsletter">
                <input name="yourmail" type="email" className="form-control" placeholder="Enter email..." aria-label="Enter email..." aria-describedby="basic-addon" />
                <div className="input-group-append">
                <button className="btn btn-secondary" type="submit">Notify Me!</button>
                </div>                
            </div>
      </form>
      )
  }
}

export default Subscribe