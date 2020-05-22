using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BackgroundScript : MonoBehaviour
{

    public float scrollspeed = 0.1f;
    private MeshRenderer mesh_rend;
    private float xScroll;

    private void Awake()
    {
        mesh_rend = GetComponent<MeshRenderer>();

    }



    // Update is called once per frame
    void Update()
    {
        Scroll();
    }

    void Scroll()
    {
        xScroll = Time.time * scrollspeed;

        Vector3 offset = new Vector2(xScroll, 0f);
        mesh_rend.sharedMaterial.SetTextureOffset("_MainTex", offset);
    }



}
