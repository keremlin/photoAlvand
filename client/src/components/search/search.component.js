import { CardColumns, Card } from "react-bootstrap";
import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import http from './../../http-common';
import authHeader from "./../../services/auth-header";
import { Link } from 'react-router-dom';


 function Search() {
    const {categoryId} =useParams();
    const[isLoaded,setIsLoaded]=useState(false);
    const [file, setFile] = useState({ data: { formname: "arash" } });
    useEffect(()  => {
        if (isLoaded === false )
             http.get('/search/byCategory/'+categoryId,
                { headers: authHeader() })
                .then((response) => {
                    if (response.data != null) {
                        const newData = { data: response.data };
                        setFile(newData);
                        setIsLoaded(true);
                    }
                }).catch(function (err) {
                    console.log(err);
                });
    }, [categoryId,isLoaded,file]);
        return (
        <>
        <div className="row">
            <div className="col-sm-12">
                <p>جستجو در گروه : 
            {(isLoaded?file.data[0].currentSearch.name:null)}
        </p>
            </div>
        </div>
        
         <CardColumns>
        {
            (isLoaded?
                file.data.map((item,index)=>
                    <Link key={index} to={'/picture/'+item.id}>
                        <Card >
                            <Card.Img variant="top" src={item.physicalPath} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">خرید این عکس به قیمت {item.price}</small>
                            </Card.Footer>
                        </Card>
                    </Link>
                ):'باخطا مواجه شده است'+categoryId)
            }
               
            </CardColumns>
        </>
    );
}
export default (Search);