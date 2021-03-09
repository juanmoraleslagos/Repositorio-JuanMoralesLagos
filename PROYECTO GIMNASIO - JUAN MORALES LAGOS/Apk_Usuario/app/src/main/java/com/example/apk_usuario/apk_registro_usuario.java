package com.example.apk_usuario;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class apk_registro_usuario extends AppCompatActivity {

  //Declarando Variables del tipo de dato que corresponda.

    private EditText txt_usr;
    private EditText txt_pass;
    Button btn_ing;
    Button btn_reg;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_apk_registro_usuario);

        //Relacionar variables...

        txt_usr  = (EditText) findViewById(R.id.editText3);
        txt_pass = (EditText) findViewById(R.id.editText4);
        btn_ing  = (Button) findViewById(R.id.button3);
        btn_reg  = (Button) findViewById(R.id.button4);
    }

public void CapturarDatos(View view){
        String v_usr, v_pass, msj;

        //Validando datos...

    if (txt_usr.getText().toString().trim().equalsIgnoreCase("")){
        txt_usr.setError("DEBE INGRESAR USUARIO");

    }else if (txt_pass.getText().toString().trim().equalsIgnoreCase("")){
        txt_pass.setError("DEBE INGRESAR CONTRASEÑA");

    }else {
        //Recuperando Datos...

        v_usr  = txt_usr.getText().toString();
        v_pass = txt_pass.getText().toString();

        msj = "HA INGRESADO CON EXITO";

        //Mostrando Mensaje Flotante TOASt

        Toast.makeText(this,msj,Toast.LENGTH_LONG).show();
    }
}

public void CambiarRegistro (View view){

        //intent, la clase intent cambia de interfaz.

    Intent intent = new Intent(this,Ingresar_Datos_Usuario.class);
    startActivity(intent);
}

}
