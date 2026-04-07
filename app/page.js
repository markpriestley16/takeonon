export default function Home() {
  return (
    <main style={{fontFamily:'sans-serif',background:'#faf8f3',minHeight:'100vh',margin:0,padding:0}}>
      <nav style={{background:'#111a14',padding:'0 48px',height:'64px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center',gap:'10px',color:'white',fontSize:'22px',fontWeight:'800'}}>
          <div style={{background:'#0f7b52',width:'34px',height:'34px',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'13px',fontWeight:'800'}}>TO</div>
          TakenOn
        </div>
        <button style={{background:'#0f7b52',color:'white',border:'none',padding:'10px 22px',borderRadius:'8px',fontSize:'14px',fontWeight:'700'}}>Start free trial</button>
      </nav>
      <div style={{maxWidth:'1100px',margin:'0 auto',padding:'100px 48px',textAlign:'center'}}>
        <h1 style={{fontSize:'64px',fontWeight:'900',letterSpacing:'-2.5px',color:'#111a14',marginBottom:'24px'}}>Taking someone <span style={{color:'#0f7b52'}}>on.</span><br/>Made simple.</h1>
        <p style={{fontSize:'19px',color:'#3a4a3e',marginBottom:'40px'}}>From job ad to first day in under 10 minutes.</p>
        <button style={{background:'#0f7b52',color:'white',border:'none',padding:'16px 32px',borderRadius:'10px',fontSize:'16px',fontWeight:'700'}}>Start free — 14 days →</button>
      </div>
      <footer style={{background:'#111a14',padding:'32px 48px',textAlign:'center',color:'rgba(255,255,255,0.3)',fontSize:'13px'}}>© 2026 TakenOn · Queenstown, New Zealand</footer>
    </main>
  )
}
