---
title: "Linux"
description: "Follow the instructions below to help you begin installing ASHIRT to your local desktop"
layout: list
---

**Step 1.** Download ASHIRT for Linux [here]({{<fetch-ashirt-version template="https://github.com/ashirt-ops/ashirt/releases/download/%[1]v/ashirt-%[1]v-x86_64.AppImage">}})

**Step 2.** Set the executable bit on the downloaded app image:\
<code id="linux-command">chmod +x{{< fetch-ashirt-version template="ashirt-%s-x86_64.AppImage" >}} <button onClick="copyCode('linux-command')">Copy code</button></code>

**Step 3.** Launch ASHIRT application:\
<code id="launch-linux">{{< fetch-ashirt-version template="./ashirt-%s-x86_64.AppImage" >}} <button onClick="copyCode('launch-linux')">Copy code</button></code>
