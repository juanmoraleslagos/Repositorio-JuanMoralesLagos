package com.example.apk_usuario;

import androidx.appcompat.app.AppCompatActivity;

import android.app.DatePickerDialog;
import android.app.DatePickerDialog.OnDateSetListener;
import android.content.ContentValues;
import android.content.Intent;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.View;
import android.view.textclassifier.TextLinks;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONObject;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

public class Ingresar_Datos_Usuario extends AppCompatActivity implements Response.Listener<JSONObject>,Response.ErrorListener {

    private EditText    rutIngresoUsuario;
    private EditText    nombreIngresoUsuario;
    private EditText    apellidoPaternoUsuario;
    private EditText    apellidoMaternoUsuario;
    private EditText    fechaNacimientoUsario;
    private RadioGroup  contenedorGeneroUsuario;
    private RadioButton generoMasculinoUsuario;
    private RadioButton generoFemeninoUsuario;
    private EditText    fechaIngresoUsuario;
    private EditText    claveIngresoUsuario;
    private EditText    claveReingresoUsuario;
            Button      botonRegistrarUsuario;

    //variables de la libreria Volley.
    RequestQueue request;
    JsonObjectRequest jsonObjectRequest;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_ingresar__datos__usuario);

        //Relacionando con los widgets

        rutIngresoUsuario       = (EditText)    findViewById(R.id.txt_rut_ing_datos);
        nombreIngresoUsuario    = (EditText)    findViewById(R.id.txt_nom_ing_datos);
        apellidoPaternoUsuario  = (EditText)    findViewById(R.id.txt_ape_pat_ing_datos);
        apellidoMaternoUsuario  = (EditText)    findViewById(R.id.txt_ape_mat_ing);
        fechaNacimientoUsario   = (EditText)    findViewById(R.id.dtm_fec_nac_ing_datos);
        contenedorGeneroUsuario = (RadioGroup)  findViewById(R.id.cont_gen_ing_datos);
        generoMasculinoUsuario  = (RadioButton) findViewById(R.id.rdb_masc_ing_datos);
        generoFemeninoUsuario   = (RadioButton) findViewById(R.id.rdb_fem_ing_datos);
        fechaIngresoUsuario     = (EditText)    findViewById(R.id.dtm_fec_ing_datos);
        claveIngresoUsuario     = (EditText)    findViewById(R.id.txt_pass_ing_datos);
        claveReingresoUsuario   = (EditText)    findViewById(R.id.txt_pass_reing_datos);
        botonRegistrarUsuario   = (Button)      findViewById(R.id.btn_reg_ing_datos);

        //contexto de la variable request.
        request = Volley.newRequestQueue(getApplicationContext());

        botonRegistrarUsuario.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                IngresarDatosSqLite();
                ingresarDatosMsqlPersona();
            }
        });

    }

    public void IngresarDatosSqLite() {
        String rut;
        String nombre;
        String apellidoPaterno;
        String apellidoMaterno;
        String fechaNacimiento;
        String fechaIngreso;
        String clave1;
        String mensaje_Error = "Debe Seleccionar Su Género";
        int codigoGenero = 1;

        //Capturando los valores, validando que no deje campos vacios...

        if (rutIngresoUsuario.getText().toString().trim().equalsIgnoreCase("")) {
            rutIngresoUsuario.setError("DEBE INGRESAR SU RUT");

        } else if (nombreIngresoUsuario.getText().toString().trim().equalsIgnoreCase("")) {
            nombreIngresoUsuario.setError("DEBE INGRESAR SU NOMBRE.");

        } else if (apellidoPaternoUsuario.getText().toString().trim().equalsIgnoreCase("")) {
            apellidoPaternoUsuario.setError("DEBE INGRESAR SU APELLIDO PATERNO.");

        }else if (apellidoMaternoUsuario.getText().toString().trim().equalsIgnoreCase("")){
            apellidoMaternoUsuario.setError("DEBE INGRESAR SU APELLIDO MATERNO");

        }else if (fechaNacimientoUsario.getText().toString().equalsIgnoreCase("")) {
            fechaNacimientoUsario.setError("DEBE INGRESAR SU FECHA DE NACIMIENTO.");

        }else if (contenedorGeneroUsuario.getCheckedRadioButtonId() == -1) {
            Toast.makeText(this, mensaje_Error, Toast.LENGTH_LONG).show();

        }else if (fechaIngresoUsuario.getText().toString().trim().equalsIgnoreCase("")) {
            fechaIngresoUsuario.setError("DEBE INGRESAR LA FECHA DE INGRESO.");

        }else if (claveIngresoUsuario.getText().toString().trim().equalsIgnoreCase("")) {
            claveIngresoUsuario.setError("DEBE INGRESAR UNA CONTRASEÑA.");

        }else if (claveReingresoUsuario.getText().toString().trim().equalsIgnoreCase("")) {
            claveReingresoUsuario.setError("DEBE CONFIRMAR SU CONTRASEÑA.");

        }else if (!claveIngresoUsuario.getText().toString().trim().equals(claveReingresoUsuario.getText().toString().trim())) {
            claveReingresoUsuario.setError("CONTRASEÑAS DEBEN SER IGUALES");

        }else {

            //Recuperando los datos.....
            rut             = rutIngresoUsuario.getText().toString();
            nombre          = nombreIngresoUsuario.getText().toString();
            apellidoPaterno = apellidoPaternoUsuario.getText().toString();
            apellidoMaterno = apellidoMaternoUsuario.getText().toString();
            fechaNacimiento = fechaNacimientoUsario.getText().toString();
            fechaIngreso    = fechaIngresoUsuario.getText().toString();
            if (generoMasculinoUsuario.isChecked()){
                codigoGenero = 1;

            }else if (generoFemeninoUsuario.isChecked()){
                codigoGenero = 2;
            }
            clave1         = claveIngresoUsuario.getText().toString();


            //instanciamos la clase DbHelper.

            DbHelper dbHelper = new DbHelper(this, "bdgym", null, 1);
            SQLiteDatabase BaseDeDatos = dbHelper.getWritableDatabase();

            if (BaseDeDatos != null) {

                ContentValues contentValues = new ContentValues();

                //debemos cargar el objeto con los datos.
                contentValues.put("rutUsuario", rut);
                contentValues.put("nombreUsuario", nombre);
                contentValues.put("apePatUsuario", apellidoPaterno);
                contentValues.put("apeMatUsuario", apellidoMaterno);
                contentValues.put("fechNacUsuario",fechaNacimiento);
                contentValues.put("fechIngUsuario",fechaIngreso);
                contentValues.put("codigoGeneroUsuario",codigoGenero);
                contentValues.put("claveUsuario", clave1);
                contentValues.put("codigoEstadoUsuario",1);

                long nfilas = BaseDeDatos.insert("tblusuario", null, contentValues);
                dbHelper.close();

                rutIngresoUsuario.setText("");
                nombreIngresoUsuario.setText("");
                apellidoPaternoUsuario.setText("");
                apellidoMaternoUsuario.setText("");
                fechaNacimientoUsario.setText("");
                fechaIngresoUsuario.setText("");
                claveIngresoUsuario.setText("");
                claveReingresoUsuario.setText("");

                if (nfilas > 0) {
                    Toast.makeText(this, "REGISTRO INSERTADO CON EXITO", Toast.LENGTH_LONG).show();

                } else {
                    Toast.makeText(this, "ERROR AL INSERTAR", Toast.LENGTH_LONG).show();
                }

            } else {
                Toast.makeText(this, "NO HAY PERMISO DE ESCRITURA", Toast.LENGTH_LONG).show();
            }
        }

        Intent intent = new Intent(this,MainActivity.class);
        startActivity(intent);
    }
    public void ingresarFechaNacimiento(View view) {
        int dia;
        int mes;
        int anio;
        //INSTANCIAR LA FUNCION CALENDAR...
        final Calendar calendar = Calendar.getInstance();
        dia = calendar.get(Calendar.DAY_OF_MONTH);
        mes = calendar.get(Calendar.MONTH);
        anio = calendar.get(Calendar.YEAR);
        //INSTANCIANDO EL DATEPICKERDIALOG.....
        DatePickerDialog datePickerDialog = new DatePickerDialog(this, new OnDateSetListener() {

            @Override
            public void onDateSet(DatePicker view, int year, int monthOfYear, int dayOfMonth) {
                fechaNacimientoUsario.setText(year + "-" + (monthOfYear + 1) + "-" + dayOfMonth);
            }
        }
                , anio, mes, dia);
        datePickerDialog.show();
        {
        }
    }
    public void registrarFechaIngreso(View view){
        Calendar calendario =  Calendar.getInstance();
        int year  = calendario.get(Calendar.YEAR);
        int month = calendario.get(Calendar.MONTH);
        int day   = calendario.get(Calendar.DAY_OF_MONTH);

        DatePickerDialog datePickerDialog = new DatePickerDialog(this, new OnDateSetListener() {

            @Override
            public void onDateSet(DatePicker view, int year, int monthOfYear, int dayOfMonth) {
                fechaIngresoUsuario.setText(year + "-" + (monthOfYear + 1) + "-" + dayOfMonth);
            }
        }
                , year, month, day);
        datePickerDialog.show();
        {
        }
    }

    public void ingresarDatosMsqlPersona(){
        String rut;
        String nombre;
        String apellidoPaterno;
        String apellidoMaterno;
        String clave1;
        int codigoEstado = 1;

        rut             = rutIngresoUsuario.getText().toString();
        nombre          = nombreIngresoUsuario.getText().toString();
        apellidoPaterno = apellidoPaternoUsuario.getText().toString();
        apellidoMaterno = apellidoMaternoUsuario.getText().toString();
        codigoEstado = 1;
        clave1         = claveIngresoUsuario.getText().toString();



        String url = "http://192.168.0.5:/webservicemovil/webservicetblpersona.php?rutPersona="+rut+"&nombrePersona="+nombre+"&apePatPersona="+apellidoPaterno+"&apeMatePersona="+apellidoMaterno+"&codigoEstadoPersona="+codigoEstado+"&clavePersona="+clave1;
        jsonObjectRequest = new JsonObjectRequest(Request.Method.GET,url,null,this,this);
        request.add(jsonObjectRequest);
    }



    @Override
    public void onErrorResponse(VolleyError error) {
        Toast.makeText(this,"Error al crear el usuario",Toast.LENGTH_SHORT).show();

    }


    @Override
    public void onResponse(JSONObject response) {
        Toast.makeText(this,"Usuario creado con exito",Toast.LENGTH_SHORT).show();

    }
}




