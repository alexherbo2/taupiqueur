const videoSources = [
  "instagram_C-2XADlMx5H.mp4",
  "instagram_C-4MzxEtyWY.mp4",
  "instagram_C-6UzGIBZ6x.mp4",
  "instagram_C-B0bcYPEFL.mp4",
  "instagram_C-EHl8ZIGwB.mp4",
  "instagram_C-GD6UJowIf.mp4",
  "instagram_C-IySTiOBjl.mp4",
  "instagram_C-JAKhko6QV.mp4",
  "instagram_C-JmfrhRGEQ.mp4",
  "instagram_C-Jy-gQOcRu.mp4",
  "instagram_C-NThSNSQHl.mp4",
  "instagram_C-P9tdISU8q.mp4",
  "instagram_C-PFFMThvH9.mp4",
  "instagram_C-QA-57xRi9.mp4",
  "instagram_C-SiNyGRNSF.mp4",
  "instagram_C-SxsvWxIId.mp4",
  "instagram_C-Tdo0konIE.mp4",
  "instagram_C-U_9ihyUWH.mp4",
  "instagram_C-Ue07-sUVV.mp4",
  "instagram_C-WJTXCIeMp.mp4",
  "instagram_C-WWCJuo5dJ.mp4",
  "instagram_C-XPZGUy8AD.mp4",
  "instagram_C-Xb-wAMMC0.mp4",
  "instagram_C-XritUp_nT.mp4",
  "instagram_C-ZYRuLpe7W.mp4",
  "instagram_C-Zm6BgxoP5.mp4",
  "instagram_C-c4ywQPNsd.mp4",
  "instagram_C-e9XTpCF3J.mp4",
  "instagram_C-elYx0Sln2.mp4",
  "instagram_C-hmq_csn3G.mp4",
  "instagram_C-iW6AcxetZ.mp4",
  "instagram_C-iiUoDOhhF.mp4",
  "instagram_C-kv58JoG3q.mp4",
  "instagram_C-l2DBfOeod.mp4",
  "instagram_C-nynW7Atz6.mp4",
  "instagram_C-pYCZrMyG_.mp4",
  "instagram_C-qGy5WR6q4.mp4",
  "instagram_C-tJQGiIiT5.mp4",
  "instagram_C0-DK9VrzT1.mp4",
  "instagram_C0-tvjXiOv9.mp4",
  "instagram_C019uYKoSWk.mp4",
  "instagram_C04sIUjNbPq.mp4",
  "instagram_C04u7T6xbGt.mp4",
  "instagram_C07O5OXOvDk.mp4",
  "instagram_C08U0pRo4x7.mp4",
  "instagram_C08fI2Vs7ZS.mp4",
  "instagram_C09e7k2ulEd.mp4",
  "instagram_C09uQh9PZ96.mp4",
  "instagram_C0C0iqlPK1B.mp4",
  "instagram_C0DIiJPoGi-.mp4",
  "instagram_C0EqMRoLuiM.mp4",
  "instagram_C0FBuykvTM8.mp4",
  "instagram_C0HLVV_vk8v.mp4",
  "instagram_C0HQ6qMMjmD.mp4",
  "instagram_C0IGk1vv2EW.mp4",
  "instagram_C0IlEvIr-cJ.mp4",
  "instagram_C0J07Kard8U.mp4",
  "instagram_C0KV1QjuWf1.mp4",
  "instagram_C0M8fwVuDh0.mp4",
  "instagram_C0MAFlsNSJe.mp4",
  "instagram_C0Mt1k5oOeG.mp4",
  "instagram_C0PzKDRLwfX.mp4",
  "instagram_C0R3J3zBBNL.mp4",
  "instagram_C0R9f6Wo_sE.mp4",
  "instagram_C0RFVQfvkH8.mp4",
  "instagram_C0RXqEHN0lm.mp4",
  "instagram_C0Rp8iLsiBr.mp4",
  "instagram_C0V4ekfu0gS.mp4",
  "instagram_C0W1n2YITcJ.mp4",
  "instagram_C0WIPB2BV-8.mp4",
  "instagram_C0XPxhytQi1.mp4",
  "instagram_C0Ywdj7rGTm.mp4",
  "instagram_C0aRVoVv_MW.mp4",
  "instagram_C0cSykFPI6V.mp4",
  "instagram_C0eVNfpxuwV.mp4",
  "instagram_C0g_hEXxUwV.mp4",
  "instagram_C0gezDHiu2-.mp4",
  "instagram_C0nIhRwpOGJ.mp4",
  "instagram_C0oLpr-Mrfn.mp4",
  "instagram_C0rbBXguGxo.mp4",
  "instagram_C0wuR1WAQa2.mp4",
  "instagram_C0zGjmbqK8x.mp4",
  "instagram_C0zUF-wNoc0.mp4",
  "instagram_C10sS9ZxqEG.mp4",
  "instagram_C121617Mt0y.mp4",
  "instagram_C14i2mPRMNU.mp4",
  "instagram_C1577o8RaPx.mp4",
  "instagram_C15FivEuupf.mp4",
  "instagram_C167m3APcG3.mp4",
  "instagram_C16Nyy3LdsH.mp4",
  "instagram_C16_VLrAo6C.mp4",
  "instagram_C18HGhdIV6B.mp4",
  "instagram_C1AB0nniW0h.mp4",
  "instagram_C1ArrePtOjZ.mp4",
  "instagram_C1BgOj3yA0w.mp4",
  "instagram_C1CoW7erqlj.mp4",
  "instagram_C1DVA9mxoZE.mp4",
  "instagram_C1KR6ElqN8L.mp4",
  "instagram_C1KhnTaNyhJ.mp4",
  "instagram_C1Ll5c5yI6e.mp4",
  "instagram_C1LygpTgfqf.mp4",
  "instagram_C1M6Q1DLUkU.mp4",
  "instagram_C1SrwpwJcEH.mp4",
  "instagram_C1Wa3rQsqkt.mp4",
  "instagram_C1XmzElIlbF.mp4",
  "instagram_C1XwnVDMwlW.mp4",
  "instagram_C1ZK4Q1MzFF.mp4",
  "instagram_C1Zfl9FLjMY.mp4",
  "instagram_C1dnO3aIpUA.mp4",
  "instagram_C1eXVN2PuON.mp4",
  "instagram_C1fOqVjBoHC.mp4",
  "instagram_C1ghvSvr8bb.mp4",
  "instagram_C1hMTg-PqQx.mp4",
  "instagram_C1hrqPvoo6S.mp4",
  "instagram_C1j8tE1t43i.mp4",
  "instagram_C1ksHACo6od.mp4",
  "instagram_C1pE2ryNccC.mp4",
  "instagram_C1qC1gpyvLr.mp4",
  "instagram_C1rBleSLJwn.mp4",
  "instagram_C1rxbFRSAG_.mp4",
  "instagram_C1vOiJ5PzcM.mp4",
  "instagram_C1xU3mVPkH6.mp4",
  "instagram_C1xlqA8o0BS.mp4",
  "instagram_C1xuEHWSVzt.mp4",
  "instagram_C1yF3Y9yaus.mp4",
  "instagram_C1yH2G_o05Q.mp4",
  "instagram_C1yaePNNjH2.mp4",
  "instagram_C21VcfZoJjq.mp4",
  "instagram_C24gKEkKLPL.mp4",
  "instagram_C26YYFoxTtg.mp4",
  "instagram_C26w-COgUW6.mp4",
  "instagram_C296fWhI_pD.mp4",
  "instagram_C2AWTGfCJuE.mp4",
  "instagram_C2AwM93xc0K.mp4",
  "instagram_C2BsFcsvbGk.mp4",
  "instagram_C2CDGZVOOMD.mp4",
  "instagram_C2FhJHay1_N.mp4",
  "instagram_C2FreO2o8iE.mp4",
  "instagram_C2N2iH6oAJf.mp4",
  "instagram_C2O2HuEC25X.mp4",
  "instagram_C2SFhlTxw4m.mp4",
  "instagram_C2XU1l5y7n1.mp4",
  "instagram_C2_IdgTMsbU.mp4",
  "instagram_C2_rgiLr9oF.mp4",
  "instagram_C2aET2byLab.mp4",
  "instagram_C2e6Y55o1TP.mp4",
  "instagram_C2eOtSCSFY0.mp4",
  "instagram_C2ep8-_BvzV.mp4",
  "instagram_C2f8TU4ACTj.mp4",
  "instagram_C2fZpsYNqKK.mp4",
  "instagram_C2kt6tTMND9.mp4",
  "instagram_C2lDfMOPqSG.mp4",
  "instagram_C2ljs_ErIUw.mp4",
  "instagram_C2nDAGZruHt.mp4",
  "instagram_C2pgwMWyHCd.mp4",
  "instagram_C2r3ex7pgZl.mp4",
  "instagram_C2rfn8wL4Le.mp4",
  "instagram_C2soEMWvZH-.mp4",
  "instagram_C2xgxEjRHrz.mp4",
  "instagram_C30Y2LAr9qf.mp4",
  "instagram_C31IGk-vO3L.mp4",
  "instagram_C31UojoBV3s.mp4",
  "instagram_C33oS-it3h0.mp4",
  "instagram_C34Bx2exFMI.mp4",
  "instagram_C34TVTyPfc_.mp4",
  "instagram_C37314SLQBu.mp4",
  "instagram_C37y7xMLlFT.mp4",
  "instagram_C37zysXsP-b.mp4",
  "instagram_C38kdq4uhNF.mp4",
  "instagram_C3A13mExmti.mp4",
  "instagram_C3Gps3YoLVm.mp4",
  "instagram_C3KyMnNNz7r.mp4",
  "instagram_C3NI1D_IO4-.mp4",
  "instagram_C3NMTaJP5cv.mp4",
  "instagram_C3ORS6cSFIv.mp4",
  "instagram_C3QxnT2Rfsy.mp4",
  "instagram_C3S39F8vD1j.mp4",
  "instagram_C3TukQlMJEm.mp4",
  "instagram_C3XlUqxP_mj.mp4",
  "instagram_C3YDP_pPsA3.mp4",
  "instagram_C3c_tAdqeP8.mp4",
  "instagram_C3cmun8RuAD.mp4",
  "instagram_C3cn1GZou4-.mp4",
  "instagram_C3dSMT_o4-w.mp4",
  "instagram_C3fz_2qrhgu.mp4",
  "instagram_C3kGlgAt9oh.mp4",
  "instagram_C3kgT08CgQl.mp4",
  "instagram_C3mcRG7MaOP.mp4",
  "instagram_C3mqkAOrE1Z.mp4",
  "instagram_C3oOK_PPzGF.mp4",
  "instagram_C3qEmcIyH7N.mp4",
  "instagram_C3t7u7ts8Zt.mp4",
  "instagram_C3t8J_MOn1H.mp4",
  "instagram_C3tXrxKuFj0.mp4",
  "instagram_C3u1IY5s7qn.mp4",
  "instagram_C3yG7nDMHhJ.mp4",
  "instagram_C3z6XDniLSM.mp4",
  "instagram_C3zjvoIIA9x.mp4",
  "instagram_C45tgtuO0BI.mp4",
  "instagram_C48aAbqrW0q.mp4",
  "instagram_C4AG1wqP5Ce.mp4",
  "instagram_C4BI80Eyfty.mp4",
  "instagram_C4DhjbCtRvP.mp4",
  "instagram_C4E8zPUv2lH.mp4",
  "instagram_C4Efx-nx4Tn.mp4",
  "instagram_C4IuYPXB4kg.mp4",
  "instagram_C4OGO41Ol6e.mp4",
  "instagram_C4QZ8MKyPQe.mp4",
  "instagram_C4Qr0tvNOjX.mp4",
  "instagram_C4VtTNhupOo.mp4",
  "instagram_C4YT5ftpdYz.mp4",
  "instagram_C4_PL1iS7c0.mp4",
  "instagram_C4cE7VmtDdq.mp4",
  "instagram_C4drRAruEI3.mp4",
  "instagram_C4jf4egN2Hb.mp4",
  "instagram_C52b2bjJEG1.mp4",
  "instagram_C5AX4qLIKVO.mp4",
  "instagram_C5DndvoLmvi.mp4",
  "instagram_C5F0CJopDUC.mp4",
  "instagram_C5I3x63xXgS.mp4",
  "instagram_C5OZ7vMvv-l.mp4",
  "instagram_C5TNWwDobnU.mp4",
  "instagram_C5g1YBPoRUQ.mp4",
  "instagram_C5g1bNko3i1.mp4",
  "instagram_C5jS0Kar5Kh.mp4",
  "instagram_C5l-3z-O6AC.mp4",
  "instagram_C5n_6ulrU65.mp4",
  "instagram_C5rEywQIvcN.mp4",
  "instagram_C5uVe3FpVU7.mp4",
  "instagram_C5zzzhCSsvz.mp4",
  "instagram_C6-gv8UIKNv.mp4",
  "instagram_C62ACHbytvm.mp4",
  "instagram_C69_PvjP2NZ.mp4",
  "instagram_C6EjqjGh1QW.mp4",
  "instagram_C6WJMSbrSsI.mp4",
  "instagram_C6YcHeav_LC.mp4",
  "instagram_C6jER3Sx39J.mp4",
  "instagram_C6kyryftQiC.mp4",
  "instagram_C7-ERI5onjO.mp4",
  "instagram_C76lYs0RfgO.mp4",
  "instagram_C77K8ShM9HJ.mp4",
  "instagram_C7HLcMaIow0.mp4",
  "instagram_C7HZ8q7qtzf.mp4",
  "instagram_C7K6rXlJaoI.mp4",
  "instagram_C7Ue7nZSVLr.mp4",
  "instagram_C7_p2HOhzgr.mp4",
  "instagram_C7mVBIgJv5S.mp4",
  "instagram_C7phjThsdLb.mp4",
  "instagram_C7tgZp7xnJB.mp4",
  "instagram_C7xdPcFKCU2.mp4",
  "instagram_C80HpyMitKY.mp4",
  "instagram_C832kSloYlh.mp4",
  "instagram_C84_MnoyEWr.mp4",
  "instagram_C88keeMuLWN.mp4",
  "instagram_C8IAaiXO_kr.mp4",
  "instagram_C8P6PMzorf4.mp4",
  "instagram_C8XjopCOfrJ.mp4",
  "instagram_C8_99xEO5P0.mp4",
  "instagram_C8_hbO7OWYM.mp4",
  "instagram_C8bV_B1RJtT.mp4",
  "instagram_C8duOk5xa93.mp4",
  "instagram_C8jG7r4iFfn.mp4",
  "instagram_C8o2sDmIpEk.mp4",
  "instagram_C8oW1pyo6TB.mp4",
  "instagram_C8sBu0npjkn.mp4",
  "instagram_C8ukqFTsvaO.mp4",
  "instagram_C8yBA9rojqR.mp4",
  "instagram_C8yBxHBoeMu.mp4",
  "instagram_C90f21-iHBP.mp4",
  "instagram_C92UpokRq_A.mp4",
  "instagram_C93EmIOvfi0.mp4",
  "instagram_C93vkaapHdk.mp4",
  "instagram_C954oK2sG5_.mp4",
  "instagram_C97KmX-puUp.mp4",
  "instagram_C99kcERO5aV.mp4",
  "instagram_C9AY6XrpIc3.mp4",
  "instagram_C9Cd93uyexM.mp4",
  "instagram_C9D1j8xRUtx.mp4",
  "instagram_C9L_18bS7cb.mp4",
  "instagram_C9LlQ0mtPnZ.mp4",
  "instagram_C9NIQowSU85.mp4",
  "instagram_C9OpLbiC2-U.mp4",
  "instagram_C9RHOb7pH7e.mp4",
  "instagram_C9SEM99pbbb.mp4",
  "instagram_C9Z_UDaSRJU.mp4",
  "instagram_C9_w8owylVk.mp4",
  "instagram_C9cpl3chp_T.mp4",
  "instagram_C9eb_dpOVtX.mp4",
  "instagram_C9h0nxCxIsl.mp4",
  "instagram_C9h4x4uObs2.mp4",
  "instagram_C9iGYoDyEf5.mp4",
  "instagram_C9jGyqdy-aa.mp4",
  "instagram_C9lbDpSyDGN.mp4",
  "instagram_C9mC8eeCnn1.mp4",
  "instagram_C9sgUgRPu3s.mp4",
  "instagram_C9uZqFaofHq.mp4",
  "instagram_C9vXFSbyU86.mp4",
  "instagram_C9wbJiEyKh3.mp4",
  "instagram_C9xE9xqBxIy.mp4",
  "instagram_C9xXgGeIhHZ.mp4",
  "instagram_C9z1LY6BR1t.mp4",
  "instagram_C9zyVV6Ig0Q.mp4",
  "instagram_C_51WZuIl_O.mp4",
  "instagram_C_5jwG9ozyJ.mp4",
  "instagram_C_9XTFBo4zN.mp4",
  "instagram_C_9XnDUP01O.mp4",
  "instagram_C_BLYB_OlxE.mp4",
  "instagram_C_DSWuhPxa-.mp4",
  "instagram_C_D_DgPgTrc.mp4",
  "instagram_C_Gq7MyyO3z.mp4",
  "instagram_C_ImNjvBZa3.mp4",
  "instagram_C_NZ2GfMnfk.mp4",
  "instagram_C_OhSoBNwzK.mp4",
  "instagram_C_QuLYhNvCD.mp4",
  "instagram_C_STFTQRYpK.mp4",
  "instagram_C_TbDx9qTq_.mp4",
  "instagram_C__8EJRT7pj.mp4",
  "instagram_C_cRpQWP3ss.mp4",
  "instagram_C_o3IRvooY-.mp4",
  "instagram_C_oRDb6pJMQ.mp4",
  "instagram_C_q0DQzyMir.mp4",
  "instagram_C_tfMdrCQme.mp4",
  "instagram_C_vtftwIIyF.mp4",
  "instagram_CnpFJjiDDGo.mp4",
  "instagram_Cs_6mmqIYzo.mp4",
  "instagram_CswPAi_Iutx.mp4",
  "instagram_CtZXV_Rp4Zm.mp4",
  "instagram_Ctpqj5XuV-J.mp4",
  "instagram_CtqYUs0ANtO.mp4",
  "instagram_Ctt9iSbBsRF.mp4",
  "instagram_CtwInPioYcr.mp4",
  "instagram_CtxN_HYqCtJ.mp4",
  "instagram_CuKu4oFAXJ7.mp4",
  "instagram_CucnLtVK_X-.mp4",
  "instagram_Cui2uvth7oJ.mp4",
  "instagram_CuuKWo5LqJ0.mp4",
  "instagram_Cv1K0xVBQXI.mp4",
  "instagram_Cv4jnK_No27.mp4",
  "instagram_Cv8aEzlNOEg.mp4",
  "instagram_CvGNVpVobrc.mp4",
  "instagram_CvH4pEIrclr.mp4",
  "instagram_CvKdD8nA3hp.mp4",
  "instagram_Cv_904yo7VA.mp4",
  "instagram_Cvb7dboJwnU.mp4",
  "instagram_CvjDxESg_0N.mp4",
  "instagram_CvnJklEhCiW.mp4",
  "instagram_CvvhFRhBaTJ.mp4",
  "instagram_Cvx1dt7oC_m.mp4",
  "instagram_CvzjuwkvsyF.mp4",
  "instagram_CvzpZOsNrQp.mp4",
  "instagram_Cw-vaScoa0V.mp4",
  "instagram_Cw01VbpogKt.mp4",
  "instagram_Cw2bq6ApVHE.mp4",
  "instagram_CwJdaCnAU69.mp4",
  "instagram_CwLCRf3oI53.mp4",
  "instagram_CwTjy6SJi6G.mp4",
  "instagram_CwU6qvSp2Hz.mp4",
  "instagram_CwY52HNA2pV.mp4",
  "instagram_CwZ_kdTpDBm.mp4",
  "instagram_CwihvD3M_yi.mp4",
  "instagram_Cwt-cVtuLO_.mp4",
  "instagram_CwwfjsRvCz8.mp4",
  "instagram_Cx-rQz1gfW_.mp4",
  "instagram_Cx2XGHdOaG_.mp4",
  "instagram_CxFsMw9tnds.mp4",
  "instagram_CxMvuyiMRcJ.mp4",
  "instagram_CxdDW3PxYoH.mp4",
  "instagram_CxdT6r9uHQp.mp4",
  "instagram_Cxn7-H6PE9w.mp4",
  "instagram_CxpkNtVrvi-.mp4",
  "instagram_CxranXHr9za.mp4",
  "instagram_CxzEHZOxEgN.mp4",
  "instagram_CxzYqmcBsUa.mp4",
  "instagram_Cy0xPEEKKZk.mp4",
  "instagram_Cy2JpuyLMwD.mp4",
  "instagram_Cy8PNXAJSAb.mp4",
  "instagram_Cy8qGcDS57h.mp4",
  "instagram_Cy9uEIQL_w7.mp4",
  "instagram_CyAdfTBhJsl.mp4",
  "instagram_CyEYIDeILWr.mp4",
  "instagram_CyGgZ3cusHD.mp4",
  "instagram_CyGiN5SOdSl.mp4",
  "instagram_CyGlK_UoY_y.mp4",
  "instagram_CyHuZafr3tC.mp4",
  "instagram_CyIece-AKhm.mp4",
  "instagram_CyK_HFqIxkD.mp4",
  "instagram_CyTr9wvNDE1.mp4",
  "instagram_CyirowPRTj7.mp4",
  "instagram_CykWPzyObsj.mp4",
  "instagram_Cz-DpZiMohH.mp4",
  "instagram_Cz0MplUhFz8.mp4",
  "instagram_Cz2r_ZgSpTM.mp4",
  "instagram_Cz4Dri0ImXG.mp4",
  "instagram_Cz82itcOvug.mp4",
  "instagram_CzBRttdx-mA.mp4",
  "instagram_CzGQ8UWr5yi.mp4",
  "instagram_CzI5ib3Rhy7.mp4",
  "instagram_CzIYe1ku0tV.mp4",
  "instagram_CzKWPtaRuaX.mp4",
  "instagram_CzMS1D1hSEd.mp4",
  "instagram_CzS2F9OyNIb.mp4",
  "instagram_CzSITZ6KMdJ.mp4",
  "instagram_CzW4ONQScmO.mp4",
  "instagram_CzY5CXaykiM.mp4",
  "instagram_CzY8UNJy7ZO.mp4",
  "instagram_Cz_AcS_IdMs.mp4",
  "instagram_Czedj_cRT58.mp4",
  "instagram_CzgScacsIel.mp4",
  "instagram_CzgiHEzoI3n.mp4",
  "instagram_Czgw_95oKLB.mp4",
  "instagram_CzjwmnjP4Rx.mp4",
  "instagram_CzkrOGUPq7B.mp4",
  "instagram_CzobLZ9xvF8.mp4",
  "instagram_CzrBXgCy2tD.mp4",
  "instagram_CzrJFjYOhuv.mp4",
  "instagram_CzuS37coP2F.mp4",
  "instagram_CzvXQoJoMLP.mp4",
  "instagram_CzvXrK-r7OC.mp4",
  "instagram_CzwMdKKsdkK.mp4",
  "instagram_Czy3NgEItrA.mp4",
  "instagram_DA2EXoEpmop.mp4",
  "instagram_DA3okUiObj3.mp4",
  "instagram_DA55liqyMr7.mp4",
  "instagram_DA5sQPQISvw.mp4",
  "instagram_DA6D8UvJU-h.mp4",
  "instagram_DA6EkVHRVe4.mp4",
  "instagram_DA6oM6ygEiw.mp4",
  "instagram_DABGDUzy0Sc.mp4",
  "instagram_DABhfWQvLZ2.mp4",
  "instagram_DADPBZZxXw4.mp4",
  "instagram_DADlI5DIq2-.mp4",
  "instagram_DAESg9_ycoI.mp4",
  "instagram_DAFKu-vMWc0.mp4",
  "instagram_DAGGwzzIyl2.mp4",
  "instagram_DAGVp7PpISv.mp4",
  "instagram_DAG_nNwse5i.mp4",
  "instagram_DAGkW9uuukl.mp4",
  "instagram_DAIHoueuLtW.mp4",
  "instagram_DAJoAdSxRP3.mp4",
  "instagram_DAJs7ugs8Wx.mp4",
  "instagram_DAL7n6_Ac4B.mp4",
  "instagram_DAUUjxMipbQ.mp4",
  "instagram_DAVcoP2u8Pv.mp4",
  "instagram_DAVrZYYtgoU.mp4",
  "instagram_DAY43BsybUN.mp4",
  "instagram_DAanqyIuN_b.mp4",
  "instagram_DAgJUaOB0jQ.mp4",
  "instagram_DAgO6WcxXfw.mp4",
  "instagram_DAjv8etuAqc.mp4",
  "instagram_DB-gzbQJ-_p.mp4",
  "instagram_DB3vAObIF5h.mp4",
  "instagram_DB65A9uM3pq.mp4",
  "instagram_DB72w7xRRFh.mp4",
  "instagram_DB9OOnfMcKl.mp4",
  "instagram_DBA3eN5pIRn.mp4",
  "instagram_DBCBxDPv8yV.mp4",
  "instagram_DBFAZtLv_7c.mp4",
  "instagram_DBGocAzOpPi.mp4",
  "instagram_DBHlr0-CUhZ.mp4",
  "instagram_DBJ4yqUsrX3.mp4",
  "instagram_DBJ7zLKp8wu.mp4",
  "instagram_DBL7WiuP7rW.mp4",
  "instagram_DBNHaj1PNSn.mp4",
  "instagram_DBTg5eNhurL.mp4",
  "instagram_DBYsthPOAAX.mp4",
  "instagram_DBZtgqaRD-d.mp4",
  "instagram_DBcq4RbSp0o.mp4",
  "instagram_DBegx98SSR-.mp4",
  "instagram_DBg42VZMl7G.mp4",
  "instagram_DBg7egGxa_f.mp4",
  "instagram_DBgi2IbsIAv.mp4",
  "instagram_DBluxSdv112.mp4",
  "instagram_DBqEFUdo-TD.mp4",
  "instagram_DBtjXyHvXrt.mp4",
  "instagram_DC0CGF0SMJD.mp4",
  "instagram_DCH2sNISgik.mp4",
  "instagram_DCI2Bm-PkHF.mp4",
  "instagram_DCK_qNARRab.mp4",
  "instagram_DCMk8cAILip.mp4",
  "instagram_DCPUJiutAXG.mp4",
  "instagram_DCQ1z-wMxMg.mp4",
  "instagram_DCYTDv_Movz.mp4",
  "instagram_DCgmp7UOha7.mp4",
  "instagram_DChYWVut8d1.mp4",
  "instagram_DCnF0MOS_N1.mp4",
  "instagram_DCnWlKbyl8p.mp4",
  "instagram_DCuf0S_hWex.mp4",
  "instagram_DCwEmrCILRY.mp4",
  "instagram_DD5BYgsoBix.mp4",
  "instagram_DD5Bej4z_mp.mp4",
  "instagram_DD7Ttw4vQWn.mp4",
  "instagram_DDDPIRfNjvi.mp4",
  "instagram_DDHZYSQtjAO.mp4",
  "instagram_DDHrobDIDpX.mp4",
  "instagram_DDJ3Sz7S78K.mp4",
  "instagram_DDKN0k9IXII.mp4",
  "instagram_DDNulo0tXdg.mp4",
  "instagram_DDO7ddeuPKN.mp4",
  "instagram_DDT4If2TZ9j.mp4",
  "instagram_DDVc7vCstav.mp4",
  "instagram_DDcKpNpxP0H.mp4",
  "instagram_DDfufa5Nz4k.mp4",
  "instagram_DDhOin2if8O.mp4",
  "instagram_DDjj0IKOq6I.mp4",
  "instagram_DDkBkcrv91P.mp4",
  "instagram_DDnngdGtUee.mp4",
  "instagram_DDpciUko5sN.mp4",
  "instagram_DDuRNfOolMs.mp4",
  "instagram_DDyOxE9pYU5.mp4",
  "instagram_DDzQO-czitS.mp4",
  "instagram_DDzS1RFt0Lt.mp4",
  "instagram_DDzTKNkIkhn.mp4",
  "instagram_DE4uE0ry_Ns.mp4",
  "instagram_DE5j-OiS-kO.mp4",
  "instagram_DECI-9HvBcg.mp4",
  "instagram_DEFAIzWRoIv.mp4",
  "instagram_DEMzPQ0NpY_.mp4",
  "instagram_DENuWJ-SNxg.mp4",
  "instagram_DET1G7nPuUA.mp4",
  "instagram_DEhHCtcPLGH.mp4",
  "instagram_DEhmQRyy92f.mp4",
  "instagram_DEhqJHayqBC.mp4",
  "instagram_DEoHiDQScQ-.mp4",
  "instagram_DEpXaEXyDOb.mp4",
  "instagram_DEt1obdKx4I.mp4",
  "instagram_DEvLrrbvM_7.mp4",
  "instagram_DF-5cNTvPBI.mp4",
  "instagram_DF-QEFmyakD.mp4",
  "instagram_DF2H86qyuMb.mp4",
  "instagram_DFBjNNLzuzP.mp4",
  "instagram_DFGvO5RMxsE.mp4",
  "instagram_DFO2Xk8N1CD.mp4",
  "instagram_DFOqOpus65W.mp4",
  "instagram_DFP9AyVNJB1.mp4",
  "instagram_DFQQHf1tFPU.mp4",
  "instagram_DFQrmfYS67H.mp4",
  "instagram_DFSJnoVvXtp.mp4",
  "instagram_DFVIGJbSQ3I.mp4",
  "instagram_DFVO8gmOl52.mp4",
  "instagram_DFVXAYzTJ7x.mp4",
  "instagram_DFcWONfKkaI.mp4",
  "instagram_DFlVIMQh-lb.mp4",
  "instagram_DFtHLyxxXkn.mp4",
  "instagram_DFxA6byMkF0.mp4",
  "instagram_DG8ladPzUn0.mp4",
  "instagram_DGBLY0YIlDG.mp4",
  "instagram_DGKdMlTop_r.mp4",
  "instagram_DGL4JOePQaa.mp4",
  "instagram_DGLGfnkMfLX.mp4",
  "instagram_DGWR3pLz13S.mp4",
  "instagram_DGnaZMKtzhK.mp4",
  "instagram_DGqkkq6OR8s.mp4",
  "instagram_DGs-hdqs4cw.mp4",
  "instagram_DGypVu0JxvD.mp4",
  "instagram_DHQqgM4tbMj.mp4",
  "instagram_DDovpJ3KbHS.mp4",
  "instagram_DH1vYDlIDhe.mp4",
  "instagram_DHfFh-EIymY.mp4",
  "instagram_DHlgTldxSHP.mp4",
  "instagram_DHrdBaUovd0.mp4",
  "instagram_DHyFptGICr1.mp4",
  "instagram_DHCD0wKx3uW.mp4",
  "instagram_DHRZcWbJf-s.mp4",
  "instagram_DHZE7SYN_0q.mp4",
  "instagram_DHZtBEPtFHB.mp4",
  "instagram_DHl2boyv1yP.mp4",
  "instagram_DHqrZfSTG91.mp4",
  "instagram_DHwBW_PNH0m.mp4",
  "instagram_DHxQcwfSkgi.mp4",
  "instagram_DIBzREmuF_p.mp4",
  "instagram_DHL80EIvEx-.mp4",
  "instagram_DIKpqLuzmsi.mp4",
  "instagram_DIgwWTHt-fm.mp4",
  "instagram_DInC3M9T3IP.mp4",
  "instagram_DJonw_jIQM6.mp4",
  "instagram_DJ-LFvmO4Do.mp4",
  "instagram_DJwCrf7MU8U.mp4",
  "instagram_DJrxCJgzaqj.mp4",
  "instagram_DJV-Uqxu47k.mp4",
  "instagram_DJTfSzSuMxU.mp4",
  "instagram_DIO_89yPqDx.mp4",
  "instagram_DGizZgoSMBU.mp4",
  "instagram_DKMrsEsMXsF.mp4",
  "instagram_DEeshXat5fj.mp4",
  "instagram_DEWG-avJEov.mp4",
  "instagram_DI_XwUWMhlf.mp4",
  "instagram_DKIUTTIOUkC.mp4",
  "instagram_DDD7ou1SrSV.mp4",
  "instagram_DEzZUteSQw7.mp4",
  "instagram_DHPNTB8Sajc.mp4",
  "instagram_DI5rTX-svnr.mp4",
  "instagram_DJ9aS_IR4YR.mp4",
  "instagram_DK-QLhyyBpW.mp4",
  "instagram_DK1n2zYxzcK.mp4",
  "instagram_DK1sQujsRWn.mp4",
  "instagram_DKDk-56tNN-.mp4",
  "instagram_DKbyAZ_vwR-.mp4",
  "instagram_DLEEkVYs3bM.mp4",
  "instagram_DLIEa1XxNkF.mp4",
  "instagram_DLKdT6SJzwV.mp4",
  "instagram_DLNqgDysTYs.mp4",
  "instagram_DLRRULqM8I3.mp4",
  "instagram_DLTAFUpId0U.mp4",
  "instagram_DLYPEDnBXEU.mp4",
  "instagram_DJtAx98xTeU.mp4",
  "instagram_DLVxBqPRn9Z.mp4",
  "instagram_DLXitchzPs4.mp4",
  "instagram_DLaBCfNooBB.mp4",
  "instagram_DLcrpfjJO2j.mp4",
  "instagram_DFe0UmJtJeG.mp4",
  "instagram_DGg82kuRzCO.mp4",
  "instagram_DHf9wWiTyuX.mp4",
  "instagram_DI1PmQXpq6F.mp4",
  "instagram_DJ4nlnVi-Pa.mp4",
  "instagram_DJrlVr9PmNW.mp4",
  "instagram_DKlUzQxo1tm.mp4",
  "instagram_DKyZvfFMB3Z.mp4",
  "instagram_DL-jHesSfVi.mp4",
  "instagram_DL93u5LsJd_.mp4",
  "instagram_DLZSEtQy9mx.mp4",
  "instagram_DLZmkw6oBPB.mp4",
  "instagram_DLcHYDIsQLa.mp4",
  "instagram_DLeg_ZtNh9u.mp4",
  "instagram_DLheA0iM1VG.mp4",
  "instagram_DLkk0_pNUeD.mp4",
  "instagram_DLli2qyM2DG.mp4",
  "instagram_DLmyaNEMd_5.mp4",
  "instagram_DMAOosVSlVc.mp4",
  "instagram_DMAjaYnx-x3.mp4",
  "instagram_DMBXl11iK0U.mp4",
  "instagram_DMGYmbBzYxZ.mp4",
  "instagram_DMNLuHeM2vr.mp4",
  "instagram_DMTU7DShBNQ.mp4",
  "instagram_DMTpMlZThrz.mp4",
  "instagram_DMWraHdu92v.mp4",
  "instagram_DMfqroaza8q.mp4",
  "instagram_DMm2jYJNNB7.mp4",
  "instagram_DMsE11VyE5R.mp4",
  "instagram_DGR4356yAl_.mp4",
  "instagram_DMpI3MkulEU.mp4",
  "instagram_DMxLnGWthdG.mp4",
  "instagram_DMlZO79Ikyz.mp4",
]

const videoElement = document.querySelector('video')
const videoSourceElement = document.querySelector('video source')
const videoAnchorElement = document.querySelector('a')

function playNextVideo() {
  const videoInfo = videoSources[
    Math.floor(
      Math.random() * videoSources.length
    )
  ]
  videoSourceElement.src = videoInfo
  videoAnchorElement.href = videoInfo
  videoAnchorElement.textContent = videoInfo
  videoElement.load()
  videoElement.play()
}

videoElement.addEventListener('ended', () => {
  playNextVideo()
})

playNextVideo()
