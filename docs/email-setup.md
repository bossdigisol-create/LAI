# LAI email setup: hello@ and the contact form in the Elevate Outlook inbox

## How it will work

| Address | What it is | Where it goes |
| --- | --- | --- |
| `hello@laihealthcaresolutions.com` | The public LAI address shown on the website | Stephanie's Elevate Outlook inbox (`stephanie@elevatelogisticsolutions.com`), tagged **LAI Healthcare** |
| `noreply@laihealthcaresolutions.com` | Sender for the website's automatic emails, shown as "LAI Healthcare Solutions" | Sends only. Nobody needs to read it |

When someone fills in the LAI contact form:

1. **Stephanie gets the inquiry** in her Elevate inbox from "LAI Healthcare Solutions", with the subject
   `[LAI Website] New inquiry: <topic> (<name>)`, the LAI logo and an "LAI website inquiry" label. Pressing
   **Reply** answers the visitor directly.
2. **The visitor gets a confirmation** from `noreply@laihealthcaresolutions.com`, subject
   `We received your message | LAI Healthcare Solutions`. If they reply, it goes to `hello@` and lands in
   Stephanie's inbox.

The website side is done. Part A below is the one-time setup in Microsoft 365 and in the domain's DNS. Part B is
for the developer after Part A is done.

---

## Part A: for Stephanie (about 20 minutes, done once)

Use the Microsoft 365 admin account for Elevate Logistic Solutions. You will not share any password.

### Step 1: Add the LAI domain to Microsoft 365

1. Go to **https://admin.microsoft.com** and sign in with the admin account.
2. Click **Settings → Domains → + Add domain**.
3. Type `laihealthcaresolutions.com` and click **Use this domain**.
4. Choose **Add a TXT record to the domain's DNS records** and click **Continue**.
5. Microsoft shows a TXT value that starts with `MS=ms`. **Leave this page open.** You add it in Step 2.

### Step 2: Update the DNS for laihealthcaresolutions.com

The DNS for `laihealthcaresolutions.com` is not at GoDaddy (where Elevate's is). It is at the company that hosted
the old LAI website. Its nameservers are `arthur.ns.ahostbox.com`, `pluto.ns.ahostbox.com` and
`donna.ns.ahostbox.com`. Log in there and open the **DNS** or **Zone Editor** page for
`laihealthcaresolutions.com`. If someone else manages it, send them this step.

**2a. Add the verification record, then verify**

| Type | Name / Host | Value |
| --- | --- | --- |
| TXT | `@` | the `MS=ms…` value from Step 1 |

Go back to the Microsoft page and click **Verify**. If it fails, wait 15 minutes and click **Verify** again.

**2b. Add the email records**

1. When Microsoft asks how to connect the domain, choose **Add your own DNS records** and click **Continue**.
2. Leave **Exchange and Exchange Online Protection** ticked. Leave the "Advanced options" unticked.
3. Microsoft shows three records. Copy the values **exactly as Microsoft shows them**:

| Type | Name / Host | Value | Priority |
| --- | --- | --- | --- |
| MX | `@` | the mail server Microsoft shows (it ends in `mail.protection.outlook.com` or `mx.microsoft`) | `0` |
| TXT | `@` | `v=spf1 include:spf.protection.outlook.com -all` | |
| CNAME | `autodiscover` | `autodiscover.outlook.com` | |

4. At the DNS host, also make these two changes:
   - **Delete** the old MX record that points to `laihealthcaresolutions.com`.
   - **Delete** the old TXT record that starts with `v=spf1 ip4:51.38.42.159`. A domain can only have one `v=spf1`
     record, so the new one replaces it.
5. **Do not change** the `A`, `www` or `_dmarc` records.
6. If the host's panel has an **Email Routing** setting, set it to **Remote Mail Exchanger**.
7. Back in Microsoft, click **Continue**. Every record should show a green check. If one doesn't, wait 30 minutes
   and click **Continue** again.

> If there is an old `hello@` mailbox at that host, save anything you need from it first. Once these records are
> saved, new mail for `hello@` goes to Outlook instead.

### Step 3: Send hello@ to your Elevate inbox

1. In the admin center, go to **Users → Active users** and click **your own name** (stephanie@elevatelogisticsolutions.com).
2. On the **Account** tab, click **Manage username and email**.
3. Under **Aliases**, type `hello`, choose **laihealthcaresolutions.com** in the domain list, and click **Add**.
4. Click **Save changes**.

### Step 4: Create the no-reply sender for the website

1. In the admin center, go to **Teams & groups → Shared mailboxes → + Add a shared mailbox**.
2. **Name:** `LAI Healthcare Solutions`. This is the sender name visitors see, so type it exactly.
3. **Email:** `noreply`, and choose **laihealthcaresolutions.com** in the domain list.
4. Click **Save changes**. Skip adding members. Shared mailboxes are free and need no license.

### Step 5: Tag LAI emails in Outlook

This puts a purple **LAI Healthcare** label on every LAI email in your inbox: form inquiries and anything sent to
hello@.

1. Open **Outlook on the web** (https://outlook.office.com) or the new Outlook app.
2. Click the gear icon (**Settings**) → **Mail → Rules → + Add new rule**.
3. **Name:** `LAI Healthcare`.
4. **Add a condition:** choose **Message header includes**, type `laihealthcaresolutions.com` and press Enter.
5. **Add an action:** choose **Categorize → New category**. Name it `LAI Healthcare`, pick **purple**, and select it.
6. Leave **Stop processing more rules** unticked and click **Save**.

> If you don't see "Message header includes", make two rules with the same action instead: one with the condition
> **Recipient address includes** `laihealthcaresolutions.com`, and one with **Sender address includes**
> `laihealthcaresolutions.com`.

### Step 6 (recommended): Keep confirmations out of spam folders

1. Go to **https://security.microsoft.com/authentication** (Email authentication settings) and open the **DKIM** tab.
2. Click **laihealthcaresolutions.com**. Microsoft shows two CNAME records (`selector1._domainkey` and
   `selector2._domainkey`).
3. Add both at the DNS host from Step 2, exactly as shown.
4. After about an hour, come back and turn on **Sign messages for this domain with DKIM signatures**.

### Step 7: Tell your developer it's done

Send one line: **"LAI domain added, hello@ alias and noreply@ shared mailbox created."** Your developer switches the
website over and sends a test.

---

## Part B: for the developer (after Part A)

### 1. Check DNS has switched

```powershell
Resolve-DnsName laihealthcaresolutions.com -Type MX   # should show Microsoft, not laihealthcaresolutions.com
Resolve-DnsName laihealthcaresolutions.com -Type TXT  # one v=spf1 record, with spf.protection.outlook.com
```

### 2. Set the environment variables in Vercel

Go to the LAI project → **Settings → Environment Variables**. Set these for **Production** and **Preview**, then
**redeploy**.

| Variable | Value |
| --- | --- |
| `MS_TENANT_ID` | Same value as the Elevate project (same Microsoft 365 tenant) |
| `MS_CLIENT_ID` | Same value as the Elevate project |
| `MS_CLIENT_SECRET` | Same value as the Elevate project |
| `MAIL_SENDER_UPN` | `noreply@laihealthcaresolutions.com` |
| `MAIL_TO` | `stephanie@elevatelogisticsolutions.com` |

The Elevate app registration already has the `Mail.Send` application permission with admin consent, so no new
Microsoft setup is needed. Only change `MAIL_SENDER_UPN` after Step 4 of Part A: a sender mailbox that doesn't exist
yet makes every form submission fail. Until then, leave it at the current sender. The confirmation still goes out,
just from that address. If a `lai-website@elevatelogisticsolutions.com` shared mailbox was created earlier, it can be
deleted once the test below passes.

### 3. Test

1. Submit the live contact form using your own email address.
2. Stephanie's inbox gets `[LAI Website] New inquiry: …` from **LAI Healthcare Solutions**, with the
   **LAI Healthcare** label.
3. Your inbox gets `We received your message | LAI Healthcare Solutions` from `noreply@laihealthcaresolutions.com`.
4. Send a normal email from Gmail to `hello@laihealthcaresolutions.com`. It arrives in Stephanie's inbox with the
   **LAI Healthcare** label.

### Troubleshooting

Look in Vercel → the deployment → **Logs** for lines starting with `[contact]`:

| Error in the log | Fix |
| --- | --- |
| `ErrorInvalidUser`, `MailboxNotEnabledForRESTAPI` or `ResourceNotFound` | The noreply@ shared mailbox doesn't exist yet, or `MAIL_SENDER_UPN` has a typo. New mailboxes can take up to an hour to work. |
| `ErrorAccessDenied` | The app registration lacks `Mail.Send` (Application) with admin consent, or an application access policy limits it to other mailboxes. Add noreply@ to that policy. |
| `The inquiry could not be sent` | Visitors see an error and nothing was delivered. Fix this first. |
| `The confirmation to the visitor could not be sent` | Stephanie got the inquiry; only the visitor's confirmation failed. |
| Confirmations land in spam | Finish Part A, Step 6 (DKIM). |

### Optional: reply as hello@

Replies Stephanie writes to hello@ emails go out from `stephanie@elevatelogisticsolutions.com`. To let her choose
`hello@laihealthcaresolutions.com` in the From field, turn on sending from aliases once with Exchange Online
PowerShell: `Set-OrganizationConfig -SendFromAliasEnabled $true`. Then, in Outlook, she enables the From field and
types the hello@ address.
