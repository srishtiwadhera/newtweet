import React, {Component} from 'react'
import { Control, LocalForm } from 'react-redux-form';
import {  Button, Modal, ModalBody, ModalHeader, Row, Label} from 'reactstrap';
import {  Typography, Grid, Container } from '@material-ui/core'
import {postTweet} from '../redux/ActionCreators'

import { connect } from 'react-redux';
import styles from './Home.module.css'
class TweetForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
      }
    //   handleSubmit = (values) => (event) => {
        handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.postTweet(values.title, values.image);
        // event.preventDefault();
    }

      render() {
          return(
              <div className="col-12">
                  <Button outline onClick={this.toggleModal}>Create New Tweet</Button>
              
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add Tweet</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                   
                            <Row className="form-group m-2">
                                <Label htmlFor="title">Title</Label>
                               
                                    <Control.text model=".title" id="title" name="title"
                                        placeholder="Your Post Title"
                                        className="form-control"
                                        
                                         />
                                    
                                
                            </Row>
                            <Row className="form-group m-2">
                                <Label htmlFor="image">Image Url</Label>
                                <Control.text model=".image" id="image" name="image"
                                        placeholder="Your Image Url"
                                        className="form-control"
                                        
                                         />
                                    
                                
                            </Row>
                            <Row className="form-group m-2">
                                
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                
                            </Row>
                            </LocalForm>
                    
                    </ModalBody>
                </Modal>
                </div>
          );
      }
    }

function RenderTweets({tweets}){
    const tweet = tweets.map((tw) => {
        return (
            <Grid container spacing= {8} justify="left" className={styles.cont2}>
                    <Grid item xs={4}>
                        <img className={styles.twt} src={tw.image}  alt="image1"/>
                    </Grid>
                    <Grid item xs={4} alignItems="center">
                        <Typography color="textSecondary" className={styles.typo}>
                            {tw.title}
                        </Typography>
                    </Grid>
                </Grid>

        );
    })
    return (
        <div>
            {tweet}
        </div>

    );
}
const mapStateToProps = state => {
    return {
      tweets: state.tweets,
      
    }
  }
  const mapDispatchToProps = dispatch => ({
  
    postTweet: (title, image) => dispatch(postTweet(title, image))
  });
class Home extends Component{

    
   render(){
   
    return (
       
       

          <div>
        <Container className={styles.contmain}>
            <Grid container spacing= {6} justify="center" className={styles.topcont}>
                <Grid item xs={8} className={styles.head}>
                    <Typography variant="h5" component="h2">
                        User Name
                    </Typography>
                    <Typography color="textSecondary">
                        User Bio Lorem Ipsum ser Bio
                    </Typography>
                    <Typography color="textSecondary">
                        Lorem IpsumUser Bio Lorem Ipsum
                    </Typography>

                </Grid>
                <Grid item xs={4}>
                   <TweetForm postTweet={this.props.postTweet}/>
                </Grid>
            </Grid>
            <Container className={styles.cont}>
                <Grid container  justify="center" >
                    <Typography variant="h5" component="h2">
                        Recent Tweets of the User About a topic goes below
                    </Typography>
                </Grid>
               
                <div>
                   <RenderTweets tweets={this.props.tweets}/>
                  
                   </div>
            </Container>
        </Container>
       
        </div>
    );
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);