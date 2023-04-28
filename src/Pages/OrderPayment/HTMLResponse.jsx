export const HtmlResponseFromVisaPayment = (props)=> {
    return (
      <div dangerouslySetInnerHTML={{ __html: props.html }}></div>
    );
  }

