# Zkopírování textu a funkčních odkazů z Facebookového příspěvku
### (Copy text and working links from Facebook posts)



* tento script je urcen pro zjednoduseni kopirovani FB prispevku s uplnymi, nezkracenymi odkazy.
* programatorsky jde o velmi jednoduchou zalezitost, problemem byl pouze zpusob, jak jej zpristupnit

  do uvahy prichazelo:

  - zalozky ( Bookmarklet )
    - **pozitiva** - zdrojovy kod je k dispozici, je mozne overit, ze to neni kukacci vejce a ze skutecne dela jen to, co je deklarovano
  - rozsireni prohlizece ( Browser Extension )
    - **negativa** - nutnost instalace rozsireni do prohlizece, nemoznost pro uzivatel overit, zda distribuovany kod neprovadi dalsi, nezadouci akce
  - kod instalovany s Tampermonkey extension ( User Script (Tampermonkey/Greasemonkey))
    - **negativa** - nutnost instalace Tampermonkey rozsireni  
  - samostatna html stranka ( Simple HTML Page (No Installation))
    - **negativa** - CORS(cross-origin restrictions) - nelze jednoduse obejit

* v kodu pro zalozku se nachazi minimalizovany javascriptovy kod, ktery se nachazi v adresari src - vse je transparentni
* kod se opira o strukturu FB stranky - pokud dojde k inovaci stranek ze strany FB, je mozne, ze bude nutne take aktualizovat kod pro zkopirovani textu a funkčních odkazů z Facebookového příspěvku


<br>

<br>

<br>

### Priprava pro pouziti scriptu - vytvoreni zalozky v browseru:
1. vytvorte zalozku (kliknutim na hvezdu v prave casti adresniho radku nebo pomoci klavesove zkratky **Ctrl + D** )
   
   ![Vytvoreni zalozky](/images/create_bookmark.png)
   
2. vyvolejte spravu/ce zalozek (Nabidka->zalozky->sprava/spravce zalozek) nebo pomoci klavesove zkratky **Ctrl + Shift + O**
   
   ![Spravce zalozek](/images/bookmar_manager.png)

3. najedte na prave vytvorenou zalozku a pomoci praveho tlacitka vyvolejte kontextove menu a zvolte upravit (ve Firefoxu je moznost upravy primo v dolni casti okna)

4. URL adresu prepiste scriptem pro ["copy FB post as text"](https://github.com/evafxxx/copy_FB_post_include_working_links/blob/main/zalozky/zalozka_copy_from_FB_text) / resp. ["copy FB post as html"](https://github.com/evafxxx/copy_FB_post_include_working_links/blob/main/zalozky/zalozka_copy_from_FB_html)

    *(doporucuji pracovat pouze s prostym textem, html kod je urcen pro ty, kteri chteji vkladat zkopirovany prispevek do html stranek)*

  ![Uprava zalozky](/images/bookmar_edit.png)
  
5. pro rychle vyvolani si pripnete zalozku do panelu zalozek

  ![Spravce zalozek](/images/bookmark_panel.png)
  
<br>
<br>
<br>

### Postup pro kopirovani:
1. ve vybranem postu kliknete na cas, ktery urcuje dobu od publikovani prispevku
   
 ![Cas od publikovani prispevku](/images/fb_post_time.png)
 
2. prispevek se otevre samostatne - pote jen tuknete na zalozku "copy from FB" (nebo jak jste si ji pojmenovali)
   
  Pr.
  
     ![priklad](/images/example.png)
     
   po kliknuti na zalozku "Copy from FB"
   
     ![priklad](/images/example1.png)
     
   v clipboardu bude pote cely post






