import React , {Component} from 'react';

export default class Create extends Component {

      constructor(props){

super(props);
this.onChargePersonName =this.onChangePersonName.bind(this);
this.onChangeBusinessName=this.onChangeBusinessName.bind(this);
this.onChanegeNICNumber=this.onChargeNICNumber.bind(this);
this.onSubmit =this.onSubmit.bind(this);


this.state={
  person_name: '',
  business_Name:'',
  business_NIC_Number:''

}
}
onChangePersonName(e){
  this.setState(state:  {
    person_name:e.target.value
      } );

}

onChangeBusinessName(e){
  this.setState(state:{
    business_Name:e.target.value
  });
}

onChangeNICNumber(e){
  this.setState(state{
    business_NIC_Number:e.target.value
  });
}

onSubmit(e){
  this.setState(state: {
    e.preventDefault();
   console.log('the values are ${this.state.person_name},${this.state.business_Name}, and ${this.state.business_NIC_Number}')
   
   
   this.setState(state:{

     person_name: '',
   business_Name:'',
   business_NIC_Number:''

  })
}




    render()
    {

        return(

          <div style={{marginTop:10}}>
<h3>Add New Business</h3>
<from>
    <div className="from-group">
<labal>Add Person Name :</labal>
<input type="text" className="from-control"/>
</div>

<div className="from-group">
<labal>Business Name:</labal>
<input type="text" className="from-control"/>
</div>

<div className="from-group">
<labal>Add NIC number :</labal>
<input type="text" className="from-control"/>
</div>

<div className="from-group">
<input type ="submit" value="Register Business" className="btn btn-primary"/>
</div>
</from>
          </div>
        );
      }
}