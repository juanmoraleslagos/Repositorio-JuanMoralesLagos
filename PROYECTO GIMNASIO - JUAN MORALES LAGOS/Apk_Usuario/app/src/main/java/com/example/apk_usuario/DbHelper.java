package com.example.apk_usuario;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class DbHelper extends SQLiteOpenHelper {

    //creamos las tablas con comando sql
    String query1 = "CREATE TABLE tblgenero (idGenero INTEGER PRIMARY KEY, nombreGenero TEXT)";
    String query2 = "CREATE TABLE tblestado (idEstado INTEGER PRIMARY KEY, estado TEXT)";
    String query3 = "INSERT INTO  tblgenero VALUES(1,'Masculino')";
    String query4 = "INSERT INTO  tblgenero VALUES(2,'Femenino')";
    String query5 = "INSERT INTO  tblestado VALUES(1,'Activo')";
    String query6 = "INSERT INTO  tblestado VALUES(2,'Inactivo')";
    String query7 = "CREATE TABLE tblusuario " +
                    "(rutUsuario TEXT PRIMARY KEY, nombreusuario TEXT, apePatUsuario TEXT, apeMatUsuario TEXT, fechNacUsuario DATE, fechIngUsuario DATE," +
                    "codigoGeneroUsuario INTEGER,claveUsuario TEXT,codigoEstadoUsuario INTEGER, FOREIGN KEY (codigoGeneroUsuario) REFERENCES tblgenero(idGenero), " +
                    "FOREIGN KEY (codigoEstadoUsuario) REFERENCES tblestado(idestado))";



    public DbHelper(Context context, String name, SQLiteDatabase.CursorFactory factory,int version){
        super(context,name,factory,version); //this, BD_gimnasio, null, 1
    }

    //ejecuta consultas sql, preferences create table
    @Override
    public void onCreate(SQLiteDatabase BaseDeDatos) {
        BaseDeDatos.execSQL(query1);
        BaseDeDatos.execSQL(query2);
        BaseDeDatos.execSQL(query3);
        BaseDeDatos.execSQL(query4);
        BaseDeDatos.execSQL(query5);
        BaseDeDatos.execSQL(query6);
        BaseDeDatos.execSQL(query7);

    }

    //para hacer actualizaiones a la base de datos...
    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

    }


}
