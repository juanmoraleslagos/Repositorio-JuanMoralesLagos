package com.example.apk_administrador;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {
    // DECLARAR VERIABLES DEL TIPO DE DATO QUE CORRESPONDA.

    private  EditText txt_user_login_admin;
    private  EditText txt_pass_login_admin;
    private  Button btn_login_admin;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Enlazando Variables...

        txt_user_login_admin = (EditText) findViewById(R.id.txt_user_login_admin);
        txt_pass_login_admin = (EditText) findViewById(R.id.txt_pass_login_admin);
        btn_login_admin      = (Button) findViewById(R.id.btn_login_admin);

    }


    public void CambiarEvaluar(View view) {

        String val_usr;
        String val_pass;

        if (txt_user_login_admin.getText().toString().trim().equalsIgnoreCase("")) {
            txt_user_login_admin.setError("DEBE INGRESAR USUARIO");
            val_usr = txt_user_login_admin.getText().toString();

        } else if (txt_pass_login_admin.getText().toString().trim().equalsIgnoreCase("")) {
            txt_pass_login_admin.setError("DEBE INGRESAR CONTRASEÑA");
            val_pass = txt_pass_login_admin.getText().toString();
        } else {
            Intent intent = new Intent(this, evaluar_Usuario.class);
            startActivity(intent);
        }

    }
}




