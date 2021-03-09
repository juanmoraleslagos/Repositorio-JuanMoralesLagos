package com.example.apk_usuario;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    //Declarando Variables del tipo de dato que corresponda.

    private EditText rutLoginUsuario;
    private EditText claveLoginUsuario;
    Button btn_login_user;
    Button btn_reg_user_login;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Relacionar variables...

        rutLoginUsuario    = (EditText) findViewById(R.id.txt_rut_login_user);
        claveLoginUsuario  = (EditText) findViewById(R.id.txt_pass_user_login);
        btn_login_user     = (Button)   findViewById(R.id.btn_login_user);
        btn_reg_user_login = (Button)   findViewById(R.id.btn_reg_user_login);
    }

    public void ConsultarUsuarioRegistrado(View view){
        String rutLogin;
        String claveLogin;
        String mensaje;

        //Validando datos...
        if (rutLoginUsuario.getText().toString().trim().equalsIgnoreCase("")){
            rutLoginUsuario.setError("DEBE INGRESAR USUARIO");
        }else if (claveLoginUsuario.getText().toString().trim().equalsIgnoreCase("")){
            claveLoginUsuario.setError("DEBE INGRESAR CONTRASEÑA");
        }else {

            //Recuperando Datos...
            rutLogin   = rutLoginUsuario.getText().toString();
            claveLogin = claveLoginUsuario.getText().toString();

            //Metodo para consultar si está Registrado un Usuario..
            DbHelper dbHelper = new DbHelper(this,"bdgym",null,1);
            SQLiteDatabase BaseDeDatosConsulta = dbHelper.getWritableDatabase();
            if (BaseDeDatosConsulta != null){
                Cursor cursor = BaseDeDatosConsulta.rawQuery("SELECT rutUsuario, claveUsuario from tblusuario where rutUsuario= '"+rutLogin+"' and  claveUsuario = '"+claveLogin+"'",null);
                int dimension = cursor.getCount();
                if (dimension == 0){
                    Toast.makeText(this,"USUARIO NO EXISTE",Toast.LENGTH_SHORT).show();
                    BaseDeDatosConsulta.close();
                }else{
                    Intent intent = new Intent (this,Menu_Opciones_Usuario.class);
                    startActivity(intent);
                    BaseDeDatosConsulta.close();
                }
            }else{
                Toast.makeText(this, "No se puede leer base de datos...", Toast.LENGTH_SHORT).show();
            }
        }
    }


    public void CambiarRegistro (View view){

        //intent, la clase intent cambia de interfaz.

        Intent intent = new Intent(this,Ingresar_Datos_Usuario.class);
        startActivity(intent);
    }


}

