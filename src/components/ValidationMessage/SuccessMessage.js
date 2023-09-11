export const SuccessMessage = ({ message }) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', marginTop: '5px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#2dbe60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6" style={{height: '25px', width: '25px'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" style={{color: '#fff'}} />
            </svg>

            <p
                style={{ color: '#2dbe60', fontSize: '12px', marginBottom: '0' }}
            >
                {message}
            </p>
        </div>
    )
}
