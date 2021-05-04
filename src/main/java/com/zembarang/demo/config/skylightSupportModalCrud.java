/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.config;

import com.google.common.collect.ArrayListMultimap;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;
import org.springframework.stereotype.Controller;

/**
 *
 * @author D
 */
@Controller
public class skylightSupportModalCrud {
    
    public Map<String, String> config(String add, String edit, String replace, String  remove, String delete){

        Map<String, String> aMap = new HashMap<String, String>();
        aMap.put("add" , add);
        aMap.put("edit", edit);
        aMap.put("replace", replace);
        aMap.put("remove", remove);
        aMap.put("delete", delete);

        System.out.println(aMap);    
        return aMap;
    }
}
