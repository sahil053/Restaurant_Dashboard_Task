import './search.css';
import './SearchBarJs';

function Search(){
    
    return(
        
        <>
            <div class="jumbotron jumbotron-billboard text-center">
                <div class="container pt" style={{display: "grid", justifyContent: "center"}}>
                    <div class="text-center">
                    </div>
                    <div class="mt-5 text-color" style={{color: "black", textShadow: "3px 4px 7px $282a29", fontWeight: "bolder"}}>
                        <h1>Find the best Restaurants </h1>
                    </div>
                    <img src="./burger.png" style={{position: "absolute",
    width: "20%",
    marginLeft: "68%",
    zIndex: "0",
    transform: "rotate(62deg)",
    marginTop: "10%"}}/>
                    <img src="/element.png" style={{position: "absolute",
    width:"26%",
    marginRight: "auto",
    transform: "rotate(318deg)",
    marginTop: "8%"}} />
                    <div class="col mx-auto well col-lg-12 mt-5" style={{display: "flex", marginTop: "-15%"}}>
                        <div class="col-xs-4 pr-0">
                            <select id="select_id" class="form-control form-control-lg">
                                <option value="Select City" hidden>Select City</option>
                                <option value="4">Bengaluru</option>
                                <option value="3" >Mumbai</option>
                                <option value="1">Delhi</option>
                                <option value="6">Hyderabad</option>
                                <option value="5">Pune</option>
                            </select>
                        </div>
                        <div class="col-xs-6 pl-0 pr-0">
                            <input style={{marginTop: "0%"}} id="getText" type="text" class="form-control" placeholder="Search for Restaurant 🧑‍🍳" autoComplete={true} />
                        </div>
                        <button style={{height: "75%"}}id = "getMessage" class = "btn btn-success col-xs-2">Search</button>
                    </div>
                </div>
            </div>
            <div id="displayMap">
                            <iframe src="https://locatestore.com/aw4EkO" style={{ border:'none',width:'80%',height:'600px',marginLeft: "20%" }} allow="geolocation"></iframe>
            </div>
            <div class="container" style={{marginLeft: "22%"}}>
                <div>
                    <div class = "message col-md-12"></div>
                </div>
            </div>
            <script>
            
            </script>
        </>    
    );
}

export default Search;