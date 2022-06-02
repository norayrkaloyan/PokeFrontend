
const ProgressBar = ({id}) => {
    
  return (
    <>
   <div className="progress">
    <div className={`progress-bar progress-bar progressWidth progressBar-${id}`} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
    </div>
  </div>
    </>
  )
}

export default ProgressBar