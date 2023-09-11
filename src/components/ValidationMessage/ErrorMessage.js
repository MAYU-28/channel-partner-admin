export const ErrorMessage = ({ message }) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', marginTop: '5px'}}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{height: '25px', width: '25px'}}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" style={{color: '#fff'}}/>
      </svg>

      <p style={{ color: 'red', fontSize: '12px', marginBottom: '0' }}>
        {message}
      </p>
    </div>
  )
}
