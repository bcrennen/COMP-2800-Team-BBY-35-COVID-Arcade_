using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoapContact : MonoBehaviour
{
    public AudioClip deathNoise;

    void Start()
    {
        Debug.Log("Start");

    }

    void OnMouseOver()
    {
        AudioSource.PlayClipAtPoint(deathNoise, this.gameObject.transform.position);
        Destroy(gameObject);
    }

}

