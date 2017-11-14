import React from 'react' ;
import {Media , Box , Level , Content , Icon , Image} from 'reactbulma';
const UserItems = ({data}) => {
    
    return(
        <div>{
            data.map((data , key)=>{
                return(
                    <Box>
                    <Media>
                      <Media.Left>
                        <Image is='64x64' src="http://bulma.io/images/placeholders/128x128.png" alt="Image"/>
                      </Media.Left>
                      <Media.Content>
                        <Content>
                          <p>
                              {data}
                          </p>
                        </Content>
                        <Level mobile>
                          <Level.Left>
                            <Level.Item>
                              <Icon small><i className="fa fa-reply"/></Icon>
                            </Level.Item>
                            <Level.Item>
                              <Icon small><i className="fa fa-retweet"/></Icon>
                            </Level.Item>
                            <Level.Item>
                              <Icon small><i className="fa fa-heart"/></Icon>
                            </Level.Item>
                          </Level.Left>
                        </Level>
                      </Media.Content>
                    </Media>
                  </Box>
                )
            })
        }</div>           
    )
}

export default UserItems ;