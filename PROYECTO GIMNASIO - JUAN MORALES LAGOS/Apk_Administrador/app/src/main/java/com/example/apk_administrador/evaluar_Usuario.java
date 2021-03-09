package com.example.apk_administrador;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;

public class evaluar_Usuario extends AppCompatActivity {

    private TextView tv1;
    private ListView lv1;

    private String nombres  [] = {"Samuel","Valentina","Santiago","Alejandro","Valeria","Benjamin",
            "Gerardo","Carlos","David","Sofia"};
    private String usuarios [] = {"User 1","User 2", "User 3", "User 4","User 5", "User 6",
             "User 7", "User 8", "User 9","User 10"};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_evaluar__usuario);

        tv1 = (TextView) findViewById(R.id.txt_view_eval_user);
        lv1 = (ListView) findViewById(R.id.txt_list);


       ArrayAdapter <String> adapter = new ArrayAdapter<String>(this,R.layout.list_item_usuarios, nombres   );
       lv1.setAdapter(adapter);

       lv1.setOnItemClickListener(new AdapterView.OnItemClickListener() {
           @Override
           public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                 tv1.setText(lv1.getItemAtPosition(i) + " " +"Es el" +" " + usuarios[i]);

           }
       });



    }
}
