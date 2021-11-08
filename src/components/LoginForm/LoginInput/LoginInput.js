import React from 'react';

import InputLabel from "@material-ui/core/InputLabel";

import TextField from '@material-ui/core/TextField';

function valueSetter( setter, event ) {
  setter( event.target.value );
}


function LoginForm( props ) {

  const lang = props.lang;
  const langString = props.langString;
  const loginMap = props.loginMap
    .map( ( val ) =>
      <div key={ "div_" + val[ "id" ] }>
        <InputLabel htmlFor={ "input_" + val[ "id" ] }/>

        <TextField
          label={ langString[lang][ val[ "placeholder" ] ]  }
          variant="filled"
          required
          type={ val[ "type" ] }
          value={ val[ "value" ] }
          onChange={
            event =>
              valueSetter( val[ "setter" ], event )
          }
        />

      </div>
    );

  return (
    <div>
      { loginMap }
    </div>
  );
}

export default LoginForm;
