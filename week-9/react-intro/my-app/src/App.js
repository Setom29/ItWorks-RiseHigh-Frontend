import './App.css';

function App() {
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ]
  const showCompany = (name, revenue) => <div id={name}>{name} makes {revenue} every year</div>
  const getClassName = (temperature) => {
    let cls = ""
    if (temperature < 15){
      cls = "freezing"
    } else if (temperature <= 30){
      cls = "fair"
    } else {
      cls = "hell-scape"
    }
    return <div id="weatherBox" className={cls}></div>
   }

  return (
    <>
      <div className="ex-space">
        <h4 className='ex-title'>Exercise 1</h4>
        <div className="exercise" id="ex-1">
          {companies.map(company => showCompany(company.name, company.revenue))}
        </div>
      </div>

      <div className="ex-space">
        <h4 className='ex-title'>Exercise 2</h4>
        <div className="exercise" id="ex-2">
          {getClassName(0)}
          {getClassName(20)}
          {getClassName(40)}
        </div>
      </div>
    </>

  )
}

export default App;
