import React from "react";
import ReactDOM from "react-dom";
import api from '../api';
import Header from '../components/Header';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import DeleteModal from '../components/DeleteModal';

function useIncrementarCount(max){
  const [count, setCount]= React.useState(0);

  if(count > max){
    setCount(0);
  }
  
  return [count, setCount];
}



function DetalleCurso(props){

  const [count, setCount]= useIncrementarCount(5);
  console.log([count, setCount]);

  return(
    <div role="main" className="main">
	  <div className="page-default bg-grey typo-dark">
		
		<div className="container">
		
			<div className="row course-single">
			
				<div className="col-sm-7">
					<div className="owl-crousel">
						<img alt="Course" className="img-responsive" src="images/course/course-single-01.jpg" width="1920" height="966" />
					</div>
				</div>
				
			
				<div className="col-sm-5">
					<div className="course-detail">
					
						<div className="course-meta">
							<span className="cat bg-yellow">Medicine</span><span className="cat bg-green">Engineering</span>
							<div className="rating"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div>
							<h4>{props.curso.titulo}</h4>
							<ul className="course-meta-icons">
								<li><i className="fa fa-dollar"></i><span>Price</span><h5>365</h5></li>
								<li><i className="fa fa-users"></i><span>Students</span><h5>1300+</h5></li>
								<li><i className="fa fa-comments"></i><span>Comments</span><h5>144</h5></li>
								<li><i className="fa fa-map-marker"></i><span>Place</span><h5>Australia</h5></li>
								<li><i className="fa fa-clock-o"></i><span>Start</span><h5>Feb 14, 2016</h5></li>
								<li><i className="fa fa-clock-o"></i><span>Duration</span><h5>2 Weeks</h5></li>
							</ul>
						</div>
					</div>
				</div>

                <div class="row course-full-detail">
                  <div class="col-sm-12">
                    <h4>Descripcion</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit, ex.Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit, ex .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit, ex.Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit, ex.Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit</p>
                    
                    <blockquote>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit, ex.Repellendus, quaerat beatae nulla debitis vitae</p>
                    </blockquote>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit, ex.Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit, ex .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit, ex.Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit, ex.Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,</p> 
                              
                    <p>Lorem quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit, ex.Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit, ex .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. reprehenderit, ex.Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit, ex.Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit</p>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit, ex.Repellendus, quaerat beatae nulla debitis vitae temporibus enim sed. Optio, reprehenderit, ex .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quaerat beatae nulla debitis</p>
                </div>
                      </div>
              <div className="row"> 

                      <button onClick={props.onOpenModal} type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
                    Eliminar
                    </button>

                    <button onClick={() => {
                       setCount(count+1);
                    }} type="button" class="btn btn-primary ml-4">
                    Incrementar : {count}
                    </button>
                      </div>
                
                        <DeleteModal 
                        isOpen={props.modalIsOpen} 
                        onClose={props.onCloseModal}
                        onDeleteCurso={props.onDeleteCurso}
                        > </DeleteModal>
                      </div>
                    </div>
                  </div>
			</div>
            );
}

export default DetalleCurso;