using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MouseCursor : MonoBehaviour
{
    public float timebetweenSpawn = 0.1f;
    public GameObject trailEffect;

    // Start is called before the first frame update
    void Start()
    {
        Cursor.visible = false;
    }

    // Update is called once per frame
    void Update()
    {
        Vector2 cursorPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        transform.position = cursorPos;


        if (timebetweenSpawn <= 0 && Input.GetMouseButton(0))
        {
            Instantiate(trailEffect, cursorPos, Quaternion.identity);
            timebetweenSpawn -= 0.1f;
        }
        else
        {
            timebetweenSpawn -= Time.deltaTime;
        }
    }
}
